# General
This manual is for controllers of the Portuguese Division and contains procedures to be used on the PFATC Network

The procedures laid here are of mandatory use while controlling on the Network and shall never be adopted for real world use.
## Airport Data

|    Name    |   Madeira   |
| ---------- | ----------- |
|    ICAO    |    LPMA     |
|    IATA    |     FNC     |
## Runways and Declared Distances
|   Takeoff Run Available (TORA)   |     [m]     |
| -------------------------------- | ----------- |
|               RWY                |    Total    |
|                05                |   2481x45   |
|                23                |   2481x45   |
Backtrack is mandatory for both runways
## Radio Navigation Aids
|     ID     |    Name     |    Type     |   Frequency    |
| ---------- | ----------- | ----------- | -------------- |
|    FUN     |   Funchal   |   VOR DME   |   112.20 MHz   |
|    SNT     |   Porto Santo   |   VOR DME   |   114.90 MHz   |
## Landing Aids
N/A
## Approach Procedures
|     Approach      |    IAF     |   Altitude   |            Remarks            |
| ----------------- | ---------- | ------------ | ----------------------------- |
|   RNP A/B 05/23   |   PILIM    |    3000ft    |              N/A              |
|   VOR DME 05/23   |   ABUSU    |    3000ft    |              N/A              |
|   VOR DME 05/23   |    FUN     |    4000ft    |   Base Turn Course Reversal   |
|   VOR DME 05/23   |    SNT     |    3000ft    |              N/A              |
|     RNP Z 05      |   PILIM    |    3000ft    |        RNP AR Approach        |
|     RNP Y 05      |   MONEC    |    3000ft    |        RNP AR Approach        |
|      RNP 23       |   PILIM    |    3000ft    |        RNP AR Approach        |
|      RNP 23       |   MONEC    |    3000ft    |        RNP AR Approach        |

|    RWY     |    ILS     |    RNP     |   VOR DME   |    LOC     |
| ---------- | ---------- | ---------- | ----------- | ---------- |
|     05     |     X      |     ✓      |      ✓      |     X      |
|     23     |     X      |     ✓      |      ✓      |     X      |
### Instrument Approaches
RNP is the default approach type at Madeira. VOR DME Approaches can be requested by the flight.

4 RNP AR approaches are available and can be requested by the pilot, however they are generally slightly longer, slower, or conflict deeper with departures than the other approaches, and as such may cause an even longer delay than the normal approaches used.

The controller must direct the flight to the correct IAF for the approach type.
### Visual Approaches
When on a VOR DME, RNP A or B approach, the flight needs to report visual before the controller can issue a landing or a visual approach clearance.

If a flight is holding at FUSUL, the controller can offer a visual approach directly to either runway. This should only be used if you think it will greatly enhance the traffic flow, as it is not a normal procedure.
## Holdings
|    FIX     |   Maximum Altitude   |   Minimum Altitude   |   Inbound Course   |   Direction of Turns   |   Use/Remarks   |
| ---------- | -------------------- | -------------------- | ------------------ | ---------------------- | ----------- |
|   ABUSU    |         UNL          |        3000ft        |        211º        |         Right          |     N/A     |
|   PILIM    |        FL100         |        3000ft        |        227º        |         Right          |     N/A     |
|   MONEC    |        FL100         |        3000ft        |        024º        |          Left          |     N/A     |
|   FUSUL    |         UNL          |        3000ft        |        350º        |          Left          |     N/A     |
## Preferential Runway Configuration
Runway in use at Madeira will be the runway with a headwind component.

In case of calm or crosswinds, refer to the weather forecast to determine which runway to use and
avoid unnecessary runway changes.

If both runways are suitable, prefer the use of runway 05.

Runway 23 allows a higher arrival rate.
### Runway Changes
Runway changes shall be based on weather observations, forecasts and pilot reports, and should take the traffic situation into account.

TWR advises APP about the intended time of runway change. Based on this, APP informs TWR who will be the last arrival to the previous runway, and TWR advises APP who the last departure will be. TWR shall manually change the runway and SID of the flights departing from the new runway, and reissue clearances accordingly. Runway in use and ATIS should be reconfigured with the new runway at the intended time of runway change.
## Transition Altitude and Transition Level
The transition altitude in Madeira is 5000’. The Transition Level is automatically calculated by the ATIS using the table below. Issuing altitudes within the transition layer (between TA and TL) shall be avoided.
|    QNH     |   From 942.2 to 959.4   |   From 959.5 to 977.1   |   From 977.2 to 995.0   |   From 995.1 to 1013.2   |   From 1013.3 to 1031.6   |   From 1031.7 to 1050.3   |
| ---------- | ----------------------- | ----------------------- | ----------------------- | ------------------------ | ------------------------- | ------------------------- |
|     TL     |           80            |           75            |           70            |            65            |            60             |            55             |
## Positions and Responsibilities
|     ID     |   Position   |       Callsign       |   Frequency   |                                                         Responsibilities                                                          |
| ---------- | ------------ | -------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|   MACTR    |   LPMA_TWR   |    Madeira Tower     |    124.660    |                       Check Flight Plans; Issue ATC Clearances; Manage Departure Sequence; Ground-movements                       |
|   MATMA    |   LPMA_APP   |   Madeira Approach   |    119.605    |   Departure/Arrival traffic separation and sequencing. Airspace inside 75NM arc centered at SNT is airspace delegated to MATMA.   |
## Transfers
|    From    |     To     |                                                        Conditions/Remarks                                                        |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
|    TWR     |    APP     |   Automatic handoff after departure. Give a firm goodbye to increase chances of pilot switching to APP frequency automatically   |
|    APP     |    CTR     |                                        Reaching FL240/lateral limits if CRZ FL BLW FL245                                         |
|    CTR     |    APP     |                                    Reaching FL250/Reaching lateral limits if CRZ FL BLW FL245                                    |
|    APP     |    TWR     |                                 Becoming established in the approach (typically reaching PILIM)                                  |

APP shall transfer same SID departures with a minimum of 10 NM longitudinal separation, constant or increasing.

CTR will transfer same STAR arrivals with a minimum of 10 NM longitudinal separation, constant or increasing.
## Separation Minima
Separation minima:
- 5NM
- Visual Separation in vicinity of aerodrome

Aircraft shall be horizontal separated from active airspace reservations by the applicable minimum separation of the sector.

Aircraft shall be vertically separated from airspace reservations by 1000ft.
## Low Visibility Procedures (LVP)
Not applicable.
## ATIS Format
> LPMA ATIS [CODE] [TIME] EXP RNP [A/B] APP RWY IN USE [05/23] TRL [TL] WND [º] DEG [SPD] KT VRB BTN [º] AND [º] DEG VIS [VIS] CLD [INFO] T [TEMP] DP [DEWP] QNH [QNH] RS WND [º] DEG [SPD] KT VRB BTN [º] AND [º] DEG ACK INFO [CODE]
**Example**:

> LPMA ATIS A 1500Z EXP RNP A APP RWY IN USE 05 TRL 60 WND 360 DEG 13 KT VRB BTN 320 AND 030 DEG VIS 10KM CLD BKN 1600 FT T 26 DP 20 QNH 1021 RS WND 180 DEG 6 KT VRB BTN 150 AND 210 DEG ACK INFO A