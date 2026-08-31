# RAF Akrotiri (LCRA) — SOPs


## 1. Handoff Criteria

> RAF Akrotiri departures are passed as soon as possible at 5000 feet, or after clearing the final waypoint of the SID. And are clear of traffic.

This means a departure may be transferred from Akrotiri Tower/Approach to the next unit (Cyprus/Nicosia Approach or adjacent sector) once **either** condition is met:
- The aircraft reaches **5000 ft**, **or**
- The aircraft has passed the **final waypoint of its assigned SID**

...**provided** the aircraft is **clear of conflicting traffic** at the time of handoff. If not clear of traffic, the controller must retain the aircraft until separation is assured, even if the altitude/waypoint condition has been met.

---

## 2. Standard Departure Sequence 

### 2.1 Pre-Departure
- Controller confirms SID/route validity, initial climb altitude, and squawk before releasing for departure (see Clearance Delivery guide).
- Departure clearance issued at the holding point per local phraseology.

### 2.2 Takeoff & Initial Climb
- Tower issues takeoff clearance once runway/approach is clear.
- Aircraft follows SID lateral/vertical profile as cleared.
- Tower monitors for traffic conflicts within the ATZ/CTR before handoff.

### 2.3 Handoff to Approach/Next Sector
- **Trigger:** 5000 ft AAL/AMSL *or* final SID waypoint — whichever occurs first — **and** clear of traffic.
- Tower instructs aircraft to contact the next frequency:
  > *"[CALLSIGN], contact [NEXT UNIT] [FREQUENCY]"*
- Aircraft reads back frequency and callsign, then changes frequency.

### 2.4 Traffic Priority Override
- If handoff conditions (altitude/waypoint) are met but the aircraft is **not** clear of traffic:
  - Controller holds the aircraft on frequency.
  - Applies standard vertical/lateral/radar separation as required until clear.
  - Hands off immediately once traffic conflict resolves, without waiting for further altitude gain.

### 2.5 Coordination Notes
- Departures routed via SIDs with variable clearance limits ("OPR IFR" or similar) should have climbout details confirmed per the Ground/Tower phraseology guide before departure, since the SID alone may not define post-departure intentions.
- Any change to the 5000 ft / final-waypoint criterion (e.g. local traffic density, adjacent airspace agreements) should be coordinated with Approach and reflected here.

---

## 3. Weather and Airfield Information (ATIS Format)

Long weather and aerodrome information is passed in the following order and format. For the short weather format, read only the **bold** items:

1. **Aerodrome/letter code**
2. **Time**
3. **Runway in use**
4. Surface wind
5. **Colour state**
6. Visibility
7. General weather observations (when applicable, e.g. fog, rain)
8. Cloud coverage and heights
9. Temperature
10. **Altimeter setting** (QFE/RPS or QNH/RPS depending on local procedures)
11. **Serviceability** (as appropriate)

**ATIS letter change procedure:** When the ATIS letter changes, ATC broadcasts to "all stations" the new letter together with the changes. All aircraft are required to read back the ATIS letter together with any mandatory readback items.

| Role | Phraseology |
|---|---|
| ATC (all stations) | All stations; information code Bravo, time 1602, colour state White, new QFE 1013, Barnsley 1012 |
| Aircraft (UAS11) | Bravo QFE 1013 Barnsley 1012, Uniform 11 |

---

## 4. Colour State (Colour Code)

Colour codes: BLU (Blue), WHT (White), GRN (Green), YLO1 (Yellow 1), YLO2 (Yellow 2), AMB (Amber), RED (Red).

| Colour | Lowest Cloud Height | Visibility |
|---|---|---|
| BLU | ≥ 2500 ft | ≥ 8000 m |
| WHT | ≥ 1500 ft | ≥ 5000 m |
| GRN | ≥ 700 ft | ≥ 3700 m |
| YLO1 | ≥ 500 ft | ≥ 2500 m |
| YLO2 | ≥ 300 ft | ≥ 1600 m |
| AMB | ≥ 200 ft | ≥ 800 m |
| RED | < 200 ft | < 800 m |

**Rule:** When selecting a colour code, always go with the **worse** of the two values. Example: visibility 8 km (BLU) but cloud at 2000 ft (WHT) → overall colour state is **WHT**.

**Airfield closed (operational issues, e.g. snow/ice):** Use **BLACK** alongside the normal colour code, e.g. **BLACK/BLU**.

---

## 5. PAR/Talkdown — No Readback Required

On **PAR (Precision Approach Radar) / Talkdown (AKROTIRI Talkdown, 125.7 MHz)**, the aircraft does **not** read back Talkdown's azimuth/glidepath corrections, range calls, or other continuous guidance instructions.

- The pilot simply acknowledges initial contact and follows the guidance as transmitted.
- Continuous corrections (left/right of centreline, above/below glidepath, range calls) are one-way advisory calls from Talkdown — no readback is expected or required for each individual call.
- Standard readback rules (full readback of clearances, hold-short instructions, etc.) still apply everywhere **outside** the Talkdown guidance sequence itself — this exception is specific to the continuous PAR guidance phase only.

---

## 6. Quick Reference

| Condition | Action |
|---|---|
| Reaches 5000 ft AND clear of traffic | Hand off now |
| Passes final SID waypoint AND clear of traffic | Hand off now |
| Altitude/waypoint met but NOT clear of traffic | Retain, separate, hand off once clear |
| Neither condition met | Retain on frequency |
| ATIS letter changes | Broadcast to all stations; aircraft read back letter + mandatory items |
| Selecting colour state | Always use the worse of cloud/visibility values |
| Airfield closed (ops issue) | Use BLACK alongside normal colour code |
| On PAR/Talkdown guidance | No readback required for azimuth/glidepath/range calls |

---

