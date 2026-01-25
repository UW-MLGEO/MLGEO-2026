# Hydrothermal Analysis at Southern Hydrate Ridge

This folder contains analysis of multidisciplinary data from Southern Hydrate Ridge, a methane hydrate site offshore Oregon monitored by the [Ocean Observatories Initiative (OOI) Regional Cabled Array](https://oceanobservatories.org/).

## Project Overview

We are investigating the relationships between physical and chemical processes at an active hydrothermal vent field by integrating multiple data streams from the OOI cabled observatory. Our goal is to understand the coupling between seismic activity, acoustic emissions, and methane flux at this dynamic submarine environment.

## Current Work

### Seismic Data Analysis
- **Notebook**: `shr_seismicity.ipynb`
- **Data Source**: IRIS (OO.HYS* stations)
- **Objective**: Analyze 200 Hz seismic data to identify seasonal patterns in seismicity at hydrothermal vent fields
- **Methods**: Daily seismicity metrics (RMS amplitude, peak amplitude, energy) calculated from continuous waveform data

## Planned Integration

### 1. Acoustic Hydrophone Data
- Analyze acoustic signals from seafloor hydrophones
- Identify bubble emissions and acoustic anomalies
- Characterize the acoustic signature of hydrothermal venting

### 2. Methane Flux Measurements
- Incorporate dissolved methane concentration data
- Correlate chemical flux with physical processes
- Track temporal variations in methane release

### 3. Machine Learning Applications
- **Event Detection**: Develop ML models to automatically identify hydrothermal explosions and other transient events
- **Multi-Parameter Correlation**: Use ML to discover relationships between:
  - Seismic activity and methane flux
  - Acoustic emissions and chemical signals
  - Physical forcing (tides, storms) and vent activity
- **Anomaly Detection**: Identify unusual patterns that may indicate changes in hydrothermal system dynamics

## Data Sources

All data are from the OOI Regional Cabled Array at Southern Hydrate Ridge:
- **Seismic**: Broadband seismometers (200 Hz)
- **Acoustic**: Seafloor hydrophones
- **Chemical**: Chemical flux sensors

## Scientific Questions

1. Is there seasonal variability in seismicity at hydrothermal vents?
2. How do physical processes (seismicity, acoustic emissions) correlate with chemical signals (methane flux)?
3. What triggers hydrothermal explosions and other transient events?
4. Can ML models predict changes in vent activity based on multi-parameter observations?

## Future Directions

- Expand temporal coverage to multi-year datasets
- Integrate additional environmental parameters (temperature, pressure, currents)
- Develop real-time event detection algorithms
- Compare patterns across different hydrothermal systems

## References

- OOI Regional Cabled Array: https://oceanobservatories.org/
- Southern Hydrate Ridge: https://interactiveoceans.washington.edu/story/Southern_Hydrate_Ridge

---

*Part of the ML-GEO 2026 Submarine Volcanoes Team project*
