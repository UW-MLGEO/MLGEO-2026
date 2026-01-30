## Selecting features to apply PCA to in the dataset on glacial outlines for MLGEO-2026 in class assignment 0.6

### Laura and Mary Team

Step 1. Loaded data from course Google Drive
Step 2. Read the data using pandas
Step 3. Select a feature(s) to apply PCA to

## Features selected for importance

1. Filter out non-numerical values in the original data file
2. Clean up any missing values
3. Remove any constant columns with 1 unique value 

## Create a correlation matrix to see what variables have the strongest correlation, or in our study is a more important characteristic

1. Use the correlation matrix function and a heat map to visually identify important and related variables
2. From this correltaiton map, pick a handful of features we want to use in the PCA analysis

## Narrowed features down to the following:

1. termlon: terminal longitude can tell us information about the edge of the glacier, it's location and movement
2. zmean_m: mean elevation data is important for understanding height changes
3. aspect_deg: this characteristic can tell us about incidence of solar radiation
4. area_km2: how big is the glacier?
5. slope_deg: what is the angle of the slope?

## Created historgrams of selected features to initiate some visuals

This will help to see the distribution of selcted variables (normal? skewed? bimodal?), and outliers, and adjustments that may be needed.

After some data exploration, we determined the elevation- related features and terminal location would be a focus of the PCA analysis.