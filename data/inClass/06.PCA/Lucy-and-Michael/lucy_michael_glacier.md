# Analyzing Glacier Data with PCA
### Michael and Lucy

## Data Loading and Initial Processing
We load the data into a pandas dataframe, explore it, and remove all columns with the same value for each datapoint, as well as ID columns irrelevant for our analysis.

## Correlation Coefficients
We plot a correlation matrix and find that all of the elevation measurements are highly correlated to one another. We choose to keep the mean eelation, zmean_m, and drop the rest. We also drop the max centerline length because it is highly correlated to glacier area.

# Histograms
We drop string and NaN columns, then visualize each remaining variable as a 1D histogram.

## Scree Plot, PCA, and Loadings
First, we demean the data, then plot. We find that PC1 contains more than 90% of the information. We find that mean surface elevation is most correlated to PC1, while PC2 was most represented by mean surface aspect (azimuth).

We find that centroid and terminus coordinates did not strongly contribute to the principal components.

## Interpretation
PC1: Mean elevation, or how high the surface of the glacier is, controls more than 90% of the variance in the data. This means that glacier area, slope, and other features are all primarily controlled by glacier mean elevation. 

PC2: The remaining 5% of variance in the data is controlled by glacier aspect, or the orientation of the slope of the glacier. Since this is related to melt direction, it will also have some control on area and other features in the data.

