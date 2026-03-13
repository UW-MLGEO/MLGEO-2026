# December 2025 Atmospheric River Event: API Data Exploration

## Introduction
In December 2025, Stehekin, WA experienced a significant atmospheric river event, resulting in heavy rainfall on fire-burned land and subsequent debris flows. This assignment explores how to use public APIs to retrieve relevant hydrometeorological data to characterize the event.

## Data Sources and APIs
- **Precipitation Data:**
  - SNOTEL (Lyman Lake, Site ID 606) data was accessed via the USDA API to obtain daily cumulative precipitation values for the Stehekin area.
- **Stream Gauge Data:**
  - USGS National Water Information System (NWIS) API was used to retrieve stream stage and discharge data for the Stehekin River at Stehekin (USGS Site 12451000).

## Data Retrieval Process
- The notebook demonstrates how to construct API requests using Python's `requests` library.
- For SNOTEL, the API endpoint provided cumulative precipitation, which was processed to obtain daily values.
- For USGS, the NWIS API was queried for gage height (stage) and discharge over the event period.

## Figures and Results


### 1. Daily Precipitation at Lyman Lake SNOTEL
![Daily Precipitation](API_class_precip.png)
- **Description:** Bar plot showing daily precipitation (inches) during December 2025.
- **Key Finding:** Rainfall peaked on December 9th, with multiple days of significant precipitation, contributing to flood risk.

### 2. Stream Stage at Stehekin River
![Stream Stage](API_class_stage.png)
- **Description:** Line plot of river stage (ft) at USGS 12451000 during the event.
- **Key Finding:** The river exceeded flood stage (24.0 ft) twice, beginning on December 11th, confirming the severity of the event.

## Interpretation
- The combination of SNOTEL and USGS data, accessed via APIs, provides a clear picture of the hydrologic response to the atmospheric river event.
- The figures illustrate the temporal relationship between heavy rainfall and river flooding.

## References
- [USDA SNOTEL Data](https://wcc.sc.egov.usda.gov/nwcc/site?sitenum=606)
- [USGS NWIS API](https://waterservices.usgs.gov/nwis/iv/)

---
*This markdown summarizes the API-based data retrieval and analysis process, with figure descriptions and key findings, as demonstrated in the accompanying Jupyter notebook.*
