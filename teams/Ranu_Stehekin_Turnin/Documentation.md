# Stehekin Debris Flow Event

## Overview

In December of 2025, the town of Stehekin in Washington experienced heavy flooding and debris flow. Previous wildfires in 2024 set up the area for this event, as large burn scars weakened soil cohesion and allowed soil to become oversaturated (a necessary condition for debris flow to occur). The goal of this report is to characterize the event within the context of historical flooding and debris flow events and typical conditions to determine whether unusual precipitation patterns are to blame, or whether the post-wildfire conditions of the region played a larger role.

*Source: https://www.ncdc.noaa.gov/cdo-web/token*

## Data Sources

1. **USGS Stream Gauge Data**
   - Link: https://waterdata.usgs.gov/monitoring-location/USGS-12451000/#dataTypeId=continuous-00065-0&period=P7D&showFieldMeasurements=true
   - Station ID: USGS-12451000
   - Used to characterize the conditions of the river during the event relative to historical data
   - USGS provides a simple RESTful API

2. **NOAA Precipitation Data**
   - Link: https://www.ncei.noaa.gov/cdo-web/datasets/GHCND/stations/GHCND:USC00458059/detail
   - Station ID: GHCND:USC00458059
   - Used to evaluate whether there was unusually high precipitation relative to historical trends in the region
   - Tokenized API that requires authentication for data downloads (free account creation)

## Methods

To understand the December 2025 event within the context of the historic behavior of the Stehekin River, I plotted data for December of the previous year alongside the data for the month during which the debris flow event occurred. This approach accounts for monthly and seasonal climate variation so that a more accurate comparison can be conducted.

## Interpretation

**Refer to Plotting_Timeseries.ipynb for plots (used for interpretation)**

1. **Total Stream Discharge**

   December of 2024 only had a maximum stream discharge of **495 cfs**, compared to December of 2025, which had a maximum stream discharge of **14,300 cfs**. This means the event, in terms of discharge, was roughly **two orders of magnitude greater**.

2. **Total Monthly Precipitation**

   December of 2024 only had a maximum daily precipitation value of **63.5 mm**, compared to **96.8 mm** in December of 2025. This represents a **33.3 mm increase in maximum daily precipitation**.

   Additionally, December of 2025 had **520.6 mm of total monthly precipitation**, compared to **156.2 mm in December of 2024**—a staggering **364.4 mm increase**.

From these observations, the event can likely be attributed primarily to unusually elevated precipitation levels in 2025. The large increase in stream discharge appears to be a direct consequence of the increased rainfall. Furthermore, soil cohesion in the area had already been weakened by the **2024 Pioneer wildfires**, which likely explains why this flooding event produced more debris flow than previous floods in Stehekin.