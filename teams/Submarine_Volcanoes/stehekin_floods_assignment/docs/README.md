# Submarine Volcanoes Team

This directory contains the work of the Submarine Volcanoes team for MLGEO-2026.

## Project Overview

Our team analyzed multimodal geophysical data related to debris flows in Stehekin, WA following atmospheric river events in December 2025. By integrating precipitation data, stream gauge measurements, and seismic observations, we investigated the relationship between heavy rainfall, soil saturation, and debris flow triggering in post-wildfire landscapes.

## Directory Structure

- **docs/** - Project documentation, writeups, and analysis
  - `README.md` - This file
  - `stehekin_writeup.md` - Main project writeup analyzing climatic connections to debris flows
  - `stehekin_assn_details.md` - Assignment details and requirements
  - `ai.md` - AI usage documentation

- **notebooks/** - Jupyter notebooks for data analysis and visualization
  - `stehek_precip.ipynb` - NOAA precipitation data analysis
  - `stehekin_stream_gauge.ipynb` - USGS stream gauge data analysis
  - `stehekin-seismic.ipynb` - PNSN seismic data analysis

- **scripts/** - Python scripts for data processing
  - `stehek_precip.py` - Precipitation data processing script

- **outputs/** - Generated figures and results

## Data Sources

- **NOAA** - Daily precipitation data from Stehekin, WA
- **USGS** - Stream gauge measurements (volumetric flux)
- **IRIS/PNSN** - Seismic data from UW.DREAM station

## Key Findings

Multimodal analysis revealed that debris flows occurred on December 11, 2025, coinciding with peak stream gauge readings and following several days of intense rainfall from atmospheric rivers. The post-wildfire soil conditions made the area particularly susceptible to debris flows when soil moisture reached critical levels.