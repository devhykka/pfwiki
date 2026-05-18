import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const manifestPath = path.join(repoRoot, 'manifest.json');

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function toRouteSegment(value) {
  return value.toLowerCase();
}

function toRouteFromRelative(relativePath) {
  const normalized = toPosixPath(relativePath)
    .split('/')
    .filter(Boolean)
    .map(toRouteSegment)
    .join('/');

  return normalized ? `/${normalized}` : '/';
}

function sortObjectByKey(record) {
  return Object.fromEntries(
    Object.entries(record).sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey))
  );
}

async function listEntries(relativeDir = '') {
  const absoluteDir = path.join(repoRoot, relativeDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });
  const ignoredNames = relativeDir ? new Set() : new Set(['.git', '.github', 'scripts']);

  return entries
    .filter((entry) => !ignoredNames.has(entry.name))
    .sort((left, right) => left.name.localeCompare(right.name, 'en', { sensitivity: 'base' }));
}

async function buildFolder(relativeDir, folders, pages) {
  const folderRoute = toRouteFromRelative(relativeDir);
  const children = [];
  const folderRecord = {};

  for (const entry of await listEntries(relativeDir)) {
    const entryRelativePath = relativeDir ? path.join(relativeDir, entry.name) : entry.name;

    if (entry.isDirectory()) {
      const childRoute = toRouteFromRelative(entryRelativePath);
      children.push(childRoute);
      await buildFolder(entryRelativePath, folders, pages);
      continue;
    }

    if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.md')) {
      continue;
    }

    if (entry.name === '.data.md') {
      folderRecord.dataFile = toPosixPath(entryRelativePath);
      continue;
    }

    const pageRelativePath = entryRelativePath.replace(/\.md$/i, '');
    const pageRoute = toRouteFromRelative(pageRelativePath);
      
    children.push(pageRoute);
    pages[pageRoute] = {
      file: toPosixPath(entryRelativePath),
    };
  }

  folderRecord.children = children.sort((left, right) => left.localeCompare(right));
  folders[folderRoute] = folderRecord;
}

async function buildManifest() {
  const rootChildren = [];
  const folders = {};
  const pages = {};

  for (const entry of await listEntries()) {
    const entryRelativePath = entry.name;

    if (entry.isDirectory()) {
      const childRoute = toRouteFromRelative(entryRelativePath);
      rootChildren.push(childRoute);
      await buildFolder(entryRelativePath, folders, pages);
      continue;
    }

    if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.md') || entry.name === '.data.md') {
      continue;
    }

    const pageRoute = toRouteFromRelative(entry.name.replace(/\.md$/i, ''));
    rootChildren.push(pageRoute);
    pages[pageRoute] = {
      file: toPosixPath(entry.name),
    };
  }

  return {
    version: 1,
    root: {
      children: rootChildren.sort((left, right) => left.localeCompare(right)),
    },
    folders: sortObjectByKey(folders),
    pages: sortObjectByKey(pages),
  };
}

const manifest = await buildManifest();

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');