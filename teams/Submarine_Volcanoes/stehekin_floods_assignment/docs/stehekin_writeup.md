
# Multimodal Data Reveal Climatic Connections to Stehekin, WA Debris Flows in December 2025
In December 2025, atmospheric rivers brought significant rainfall to the North Cascades. This coincided with massive debris flows in the nearby town of Stehekin, WA, which was affected by forest fires in recent years. Without forest root systems to hold the soil, this region was sensitive to debris flows given sufficient soil moisture levels. While exact soil moisture can be challenging to measure, total precipitation and river gauge data can present a cohesive picture of rainfall and soil drainage, the two factors controlling soil moisture.

To visualize the relationship between these variables, multimodal data are pulled from APIs and plotted below.


## NOAA Precipitation Data
Analyzing NOAA daily precipitation data from Stehekin, WA in December 2025, we see that two rainfall maxima occur: December 9-13 and December 17 (Fig. 1). Precipitation represents flux into the soil moisture system, but doesn't contain information about soil drainage, a second important constraint on debris flow triggering.

![Precipitation plot](../outputs/stehekin_precipitation.png)
*Figure 1: Daily precipitation measrues from Stehekin, WA show multiple maxima surrounding December 9-17.*

## USGS Stream Gauge Data
Visualizing USGS daily stream gauge data from Stehekin, WA in December 2025, we see that the gauge maximum occurs on December 11, with a volumetric flux of 14,000 cubic feet per second (Fig. 2). This measure serves as an excellent proxy for soil moisture, as it captures flux into the system (rainfall) and flux out of the system (river drainage).

![River gauge plot](../outputs/stehekin_discharge.png)
*Figure 2: Daily stream gauge measures from Stehekin, WA show a monthly maxima on December 11.*

## PNSN Seismic Data
Plotting several days of data around the precipitation and stream gauge maxima from the UW.DREAM three-component seismometer station in Stehekin, WA, it is clear that long-period debris flows occured across the day of the stream gauge maximum, and these debris flows began after several days of heavy rainfall (Fig. 3). This represents a critically oversaturated post-burn soil, which quickly washes out as debris flows across December 11 and in more brief periods over the following days.

![Seismic plot](../outputs/stehekin_seismic.png)
*Figure 3: Seismic data for multiple days in Stehekin, WA show debris flows begin on the day of stream gauge maxima, December 11.*

## Data Accessbility
We use data from USGS for stream gauge data, NOAA for precipitation data, and IRIS for seismic data from the UW PNSN network. We use data from December 2025 in the Stehekin, WA region. All data is freely available online from these APIs, linked below.

### NOAA API:
https://www.ncei.noaa.gov/cdo-web/api/v2/data

### USGS API:
https://api.waterdata.usgs.gov/ogcapi/v0/collections/daily/items

### IRIS API:
https://ds.iris.edu/mda/UW/DREAM/?#UW_DREAM_2025-05-01_2599-12-31

## Team
Submarine Volcanologists

### Members
Christina, David, Isaac, and Michael