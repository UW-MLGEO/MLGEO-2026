## API Assignment
In December 2025, the North Cascades experienced heavy rainfall that triggered debris flows in areas that had been recently burned, such as near Stehekin, Washington. Rainfalls run off more quickly rather than seep into the ground after wildfires because the vegetation that were supposed to stabilize the hillslopes is removed and the soils become water-laden. When intense rainfall happened, water mixed with loose soil, ash, and rock on steep slopes form into a fast moving debris flow. The debris flow was further amplified because of the North Cascades mountainous terrain, as gravity and steep channels allowed debris to accelerate downslope into streams and valleys. 

## Link to Precipitation Data
https://www.weather.gov/wrh/timeseries?site=STRW1&hours=72&units=metric&chart=on&headers=on&obs=tabular&hourly=false&pview=standard&font=12&history=yes&start=20251208&end=20251212&plot=

### Observation
1. In the first figure, there are two peaks in discharge and stage over the period of 12/10/2025 through 12/16/2025

2. In the second figure shows mean discharge from 12/10 to 12/16 from 2005 to 2025. The mean discharge was the lowest at this site of measurement in 2025. There is also decreasing trend over the 20-year period.

__________________________________________________________________________________________________________________________________________


# Hydrologic Context for the December 2025 Stehekin Debris-Flow Event

## Overview
This document provides hydrologic context for debris flows that occurred near Stehekin, Washington in December 2025. Stream discharge data from the U.S. Geological Survey (USGS) are used to compare the December 2025 event with a prior high-flow event in November 2021. By examining both raw and normalized discharge, we assess whether the 2025 event represents an unusually intense hydrologic response.

All discharge data were retrieved programmatically using the USGS Water Services API and analyzed in Python.

---

## Discharge Time Series Comparison

### Period 1: November 12–19, 2021
The November 2021 event shows a gradual rise in discharge followed by a broad peak exceeding approximately **14,000 cfs**, with a relatively slow recession. This hydrograph shape suggests sustained runoff over several days, likely driven by prolonged precipitation or snowmelt contributions.

### Period 2: December 10–16, 2025
The December 2025 event exhibits a sharper and more intense hydrologic response. Discharge rapidly increases to a peak exceeding **20,000 cfs**, followed by a steep recession. A secondary peak occurs later in the period, indicating multiple storm pulses.

![Discharge Comparison](dischargeComparison.png)

The higher peak discharge and steeper rising limb in 2025 indicate more intense runoff generation, consistent with heavy rainfall on steep terrain.

---

## Normalized Discharge Analysis
To compare watershed response independent of absolute discharge magnitude, both events were normalized by their respective peak discharge values.

![Normalized Discharge Comparison](normalizedDischargeComparison.png)

The normalized hydrographs show:
- The December 2025 event rises more abruptly than the 2021 event
- Peak flow is reached more quickly, indicating rapid runoff
- The sharp rise and fall suggest limited infiltration and storage capacity

This behavior is consistent with runoff-dominated flow, which is expected in watersheds affected by recent wildfires where vegetation loss and hydrophobic soils reduce infiltration.

---

## Interpretation
Although high-magnitude discharge events have occurred previously (e.g., November 2021), the December 2025 event is distinguished by:
- A higher peak discharge
- A more rapid hydrologic response
- Multiple storm-driven peaks within a short time window

When combined with heavy precipitation and recently burned hillslopes, these conditions significantly increased the likelihood of debris-flow initiation near Stehekin.

---

## Reproducibility
Streamflow data were retrieved using the USGS Water Services API:

- **USGS Stream Gauge 12451000**  
  Stehekin River discharge (cfs)  
  <https://waterservices.usgs.gov/nwis/iv/>

## What We Found
Comparative Summary:
Period 1 (2021-11-12 to 2021-11-19): 768 discharge records
- Min discharge: 945.00 cfs
- Max discharge: 14700.00 cfs
- Mean discharge: 4823.23 cfs

Period 2 (2025-12-10 to 2025-12-16): 672 discharge records
- Min discharge: 2710.00 cfs
- Max discharge: 21500.00 cfs
- Mean discharge: 7298.12 cfs


## Conclusion
The December 2025 hydrologic response near Stehekin was both intense and rapid compared to a prior major event. These characteristics, combined with post-fire watershed conditions, provide strong hydrologic support for the occurrence of debris flows during this period.
