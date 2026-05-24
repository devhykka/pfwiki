# EGKK - Gatwick Airport

Gatwick Airport, also known as London Gatwick, is one of London’s six international airports, located 2.7 nm North of Crawley in West Sussex. It is the UK’s second-busiest and Europe’s tenth-busiest airport by passenger traffic. The airport serves an extensive mix of short-haul European, domestic, and long-haul international routes, with significant operations from both low-cost and full-service carriers.

The airport supports a wide variety of aircraft types, ranging from regional turboprops and narrow-body aircraft such as the Airbus A320 family and Boeing 737 series, through to wide-body long-haul aircraft including the Boeing 777, Boeing 787, and Airbus A350.

The airport is characterized by two parallel runways positioned to the South of the aerodrome's main aprons and two passenger terminals. The main runway, 08R/26L, handles the vast majority of aircraft movements, while the parallel runway, 08L/26R, is primarily used as a standby runway and for taxiing operations due to runway separation limitations.

---

# Use of Stands

| Pier/Apron | Stands | Assignment |
|---|---|---|
| Pier 2 (ST) | 201-210 | Domestic + Schengen |
| Pier 2 (ST) | 211-218 | International |
| Pier 3 (ST) | 301-308 | International |
| Pier 4 (NT) | 401-409 | International |
| Pier 5 (NT) | 501-512 | Schengen |
| Pier 6 (NT) | 601-609 | Domestic + Schengen |
| Cargo | 701-717 | Cargo |

---

Schengen flights are those with any destination in the islands of Spain, Cyprus or Finland on the Project Flight map.

International flights are those with any non-UK destination (i.e. any airport except Southampton and Gatwick).

Domestic flights are those with a destination of Gatwick or Southampton only.

---

# IFR Clearance

Upon first contact with Gatwick Delivery, aircraft should report the following: stand number, aircraft type, QNH and ATIS information. Review the current ATIS for further instructions on initial contact (if any).

> EZY8660, type A320, stand 210, information M, QNH 1013, request clearance to Larnaca.

If Gatwick Delivery is independently staffed, you may be instructed to report ready for push and/or startup. Remain on `EGKK_DEL` until explicitly given a frequency change.
Gatwick Planner (`EGKK_P_GND`) serves as a buffer between Delivery and Ground to help manage traffic flow (typically during events). If Planner is online, expect to contact them immediately after receiving your clearance from `EGKK_DEL`.

---

# Pushback

Pushback should be requested on the Gatwick Ground frequency (`EGKK_GND`). Include your stand number in this request.

> EZY8660, stand 210, request push and start.

The controller will advise a cardinal/intercardinal pushback direction and possibly also a taxiway, except for some stands where only one pushback direction is possible (e.g. stand 217 or 510).

---

# Taxi

Taxi should be requested as follows:

> EZY8660, request taxi.

Taxi instructions will include a holding point as the clearance limit, the runway (unless the limit does not occur at a runway), and taxiway routing.

> **Note:**  
> Taxiway K and J are staggered at their crossing with taxiway P. Ensure you do not deviate from your assigned taxi route at these points.

---

# Holding Point Assignment

## Runway 26L Operations

Holding points A2, A3 and M3 should be expected during normal runway 26L operations.

## Runway 08R Operations

Holding points J8 and J4 should be expected during normal runway 08R operations.

---

# Runways

Gatwick features two parallel runways, 26L/08R and 26R/08L, with TORAs of 3,316 m (10,879 ft) and 2,565 m (8,412 ft) respectively. Due to their close proximity, only single-runway operations are used.

> **Note:**  
> Runway 26L is the preferential runway used unless the tailwind component for this runway exceeds 5kts.

---

# Standard Instrument Departures

Currently, only runway 26L features Standard Instrument Departures (SIDs). Non-standard departure instructions will be issued for any other departure runway; radar vectoring to the filed initial fix should be expected.

> **Important:**  
> Advise ATC if you are unable to follow an assigned SID.

Follow the climb profiles of all published SIDs, unless otherwise instructed by ATC. Charted altitude restrictions may be ignored if a “climb now” instruction is issued by ATC.

The initial climb altitude for all departures is 5000 ft, unless otherwise stated.

## Initial Fixes

Flights should file the following as their initial fixes:

| Destination | Initial Fix |
|---|---|
| Haiti or the Dominican Republic | NOVMA |
| Spain or Cyprus | BOGNA |
| Finland | WIZAD |

If London Control (`EGTT_CTR`) is staffed, report passing altitude and SID (if applicable) on first contact.

---

# Arrival and STARs

On first contact with Gatwick Director, aircraft should state their cleared level (or current flight level if not descending), aircraft type, ATIS information and routing.

### Example Transmission

> EZY8660, descending FL50 to WIZAD, type A320, information A.

Only two RNAV STARs currently exist for Gatwick: `KUNAV1G` and `VASUX1G`.

## STAR Assignment

The last filed fix for arrivals should be as follows:

| Arrival Region | Last Filed Fix |
|---|---|
| Finland and Cyprus | KUNAV |
| Spain, Haiti or the Dominican Republic | VASUX |

Radar vectoring for final approach is to be expected beyond the last fix of each STAR.

Follow the descent profiles of all published STARs, unless otherwise instructed by ATC.

---

# Approach

Initial approach procedures are not available for Gatwick in the PFATC network. Radar vectoring for final approach is to be expected for all arrival runways.

ILS approaches are to be used for runways 26L and 08R. Inform Gatwick Director (`EGKK_APP`) if you are unable to accept an ILS approach. A visual approach is to be expected in this case.

---

# Frequencies

| Logon | Frequency | Position |
|---|---|---|
| EGTT_CTR | 127.430 | London Control |
| EGKK_APP | 126.825 | Gatwick Director |
| EGKK_TWR | 124.230 | Gatwick Tower |
| EGKK_S_GND | 121.805 | Gatwick Ground (South) |
| EGKK_N_GND | 121.540 | Gatwick Ground (North) |
| EGKK_P_GND | 134.230 | Gatwick Planner |
| EGKK_DEL | 121.955 | Gatwick Delivery |

> **Note:**  
> Other frequencies may be active during events. Review the ATIS for any further information.

<sub>Written by .ctizzy.</sub>
