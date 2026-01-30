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

### Histogram of Mean Elevation

This histogram shows the frequency distribution of the average elevation values of the glaciers (zmean_m). Elevation is plotted on the x-axis in meters, with frequency on the y-axis. 

### Scatter Plot of Area vs Slope

This scatter plot shows the relationship between the glacier area (area_km2) with the slope (slope_deg). Glacier area is plotted on the x-axis in square kilometers, while the slope in degrees is shown on the y-axis. 

### Histogram of Aspect

This histogram shows the frequency distribution of glacier aspect values (aspect_deg). Aspect is plotted on the x-axis in degrees, representing the direction the glacier is facing, while frequency is shown on the y-axis.