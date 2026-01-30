# Ocean Temperature and pH Correlation Analysis

## Project Overview

This project explores the relationship between sea surface temperature (SST) and ocean pH using real global oceanographic data from Copernicus Marine Service.

**Research Question:**  
*Across the global surface ocean, how are temperature and surface pH related in space and time, and do these relationships differ by region?*

---

## Data Sources

All data downloaded from [Copernicus Marine Service](https://data.marine.copernicus.eu/)

### Datasets Used

| Variable | Dataset | File | Size | Time Period |
|----------|---------|------|------|-------------|
| **pH** | Global Ocean Biogeochemistry | `1_global_mean_car_20220101.nc` | 237 MB | January 2022 |
| **Sea Surface Temperature** | ODYSSEA Global SST | `1_SSTfnd-ODYSSEA-GLOB_.nc` | 23 MB | January 2022 |
| CO2 (not used) | Global Ocean Biogeochemistry | `1_global_mean_co2_202201.nc` | 2.3 MB | January 2022 |

**Data Location:** `Data/test data sets/`

---

## Repository Structure

```
Project/
├── README.md                          # This file
├── explore_data.ipynb                 # Main analysis notebook
└── Data/
    └── test data sets/
        ├── 1_global_mean_car_20220101.nc      # pH, DIC, alkalinity
        ├── 1_SSTfnd-ODYSSEA-GLOB_.nc          # Sea surface temperature
        └── 1_global_mean_co2_202201.nc        # CO2 (not used)
```

---

## How to Use This Notebook

### Requirements
- Python 3.x
- Libraries: `xarray`, `pandas`, `numpy`, `matplotlib`, `seaborn`, `netCDF4`

### Setup
```python
# Install required packages
pip install xarray pandas numpy matplotlib seaborn netCDF4
```

### Running the Analysis

1. **Open the notebook:** `explore_data.ipynb`

2. **Run cells in order:**
   - **Cells 1-6:** Explore CO2 data (optional, not used in main analysis)
   - **Cells 7-9:** Load and visualize pH data
   - **Cells 10-12:** Load and visualize SST data

3. **What each section does:**
   - **pH Analysis (Cell 9):** Creates global map of surface ocean pH
   - **SST Analysis (Cell 12):** Creates global map of sea surface temperature

---

## Current Progress

### ✅ Completed
- Downloaded real oceanographic data from Copernicus (web interface)
- Loaded pH data (global, 681×1440 grid, surface layer only)
- Loaded SST data (global, 1600×3600 grid)
- Created geographic visualizations for both variables
- Verified spatial variation exists in both datasets

### 📋 Next Steps

1. **Resample/interpolate datasets to matching grids**
   - pH grid: 681 × 1440 points
   - SST grid: 1600 × 3600 points
   - Use xarray's `interp()` or `reindex()` to align

2. **Create combined dataset**
   - Match SST and pH at same lat/lon locations
   - Remove NaN values (land, ice regions)
   - Export to CSV for analysis

3. **Correlation analysis**
   - Scatter plot: SST vs pH
   - Calculate correlation coefficient
   - Regional comparisons (tropical vs polar, coastal vs open ocean)

4. **Machine learning modeling (if time permits)**
   - Predict pH from SST using regression
   - Clustering analysis to identify distinct ocean regions
   - Seasonal analysis (if additional months downloaded)

---

## Key Findings (So Far)

- **pH Range:** Surface ocean pH varies from ~7.8 to ~8.3
- **SST Range:** Sea surface temperature varies from ~-2°C (polar) to ~30°C (tropical)
- **CO2 Spatial Pattern:** Very uniform globally (not useful for spatial correlation analysis)

---

## Notes

### Data Download Strategy
- **Approach:** Simple web browser download (no API complexity)
- **Storage:** ~300 MB total for one month snapshot
- **Time Period:** January 2022 only (minimal storage, sufficient for class project)

### Why January 2022?
- Recent data
- Single snapshot sufficient for spatial analysis
- Avoids large multi-seasonal downloads

### Challenges Encountered
- Different grid resolutions between datasets (will need interpolation)
- Multiple depth layers in pH data (selected surface only)
- Temperature units conversion (Kelvin → Celsius)

---

## Contact

For questions about this analysis, contact: [Your Name/Email]

**Course:** MLGEO-2026  
**Institution:** University of Washington  
**Date:** January 2026
