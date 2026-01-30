# Alaska Glacier PCA Analysis

## Dataset
This analysis uses glacier data from the Randolph Glacier Inventory (RGI) for Alaska.

## Selected Features

| Feature | Description |
|---------|-------------|
| zmean_m | Mean elevation (meters) |
| slope_deg | Mean surface slope (degrees) |
| aspect_deg | Aspect/orientation (degrees) |
| area_km2 | Glacier area (km²) |

### Why These Features Were Chosen

- **zmean_m**: Elevation controls temperature and snowfall, affecting where glaciers can exist.
- **slope_deg**: Slope affects how fast ice flows downhill.
- **aspect_deg**: The direction a glacier faces determines how much sunlight it receives.
- **area_km2**: Glacier size affects how it responds to climate change.

These four features capture the main physical characteristics of glaciers.

## Visualizations

Three plots were created:
1. Histogram of mean elevation
2. Scatter plot of area vs slope
3. Histogram of aspect
