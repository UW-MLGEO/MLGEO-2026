# The goal of this project is to practice PCA implementation on a dataset describing the boundaries of Alaskan glaciers. 

We conducted the following steps in our PCA analysis:

## Selecting features to apply PCA to in the dataset on glacial outlines for MLGEO-2026 in class assignment 0.6

Step 1. Load data from course Google Drive

Step 2. Read the data using pandas

Step 3. Filter data

Step 4. Select feature(s) to apply PCA to in order to reduce the dimensionality of the data

Step 5. Apply PCA and interpret results

## Data Filtration

1. Filter out non-numerical values in the original data file (i.e. dates, reference numbers, etc.)
2. Clean up any missing values (i.e. remove any NaN values)
3. Remove any constant columns with 1 unique value 

## Create a correlation matrix to see what variables have the strongest correlation

We did this to determine what features may be important for our analysis, and what features may be redundant. 

![Alaska Glacier Filtered Data Feature Correlation Matrix](Images/CorrMatrix.png)
*Figure 1: Correlation matrix for filtered glacier data*

We then used the correlation matrix for feature selection as follows:

1. Use the correlation matrix function and a heat map to visually identify important and related variables
2. From this correltaiton map, pick a handful of features we want to use in the PCA analysis

We note that there are several highly correlated variables for the altitude (zmean_m, zmin_m, zmax_m, zmed_m). This is likely because they are all data points for essentially the same feature, the altitude. We also noted that the longitude values are highly correlated with one another, as well as with the UTM zone. The latitude values are also highly correlated with one another. Finally, we note strong correlation between the area of the glacier and the lmax_m, which is the maximum length of the glacier's centerline.

## Narrow Features:

1. **termlon**: terminal longitude can tell us information about the edge of the glacier and its location and movement
   
2. **termlat**: terminal latitude of the glacier, which also could tell us about the location of the glacier.
   
3. **zmean_m**: mean elevation data is important for understanding height changes

4. **aspect_deg**: this characteristic can tell us about incidence of solar radiation, which may affect glacier formation and shape

5. **slope_deg**: the degree of the slope is important for understanding the shape of the glacier and gives us a picture for the overall tilt of the glacier relative to its surroundings
    
6. **area_km2**: this characteristic is important for characterizing the overall size of the glacier, and gives its area in squared kilometers

7. **lmax_m**: this characteristic is the maximum length of the glacier centerline, which also helps to quantify the overall size of the glacier

We note that of the numerical data, we only chose to utilize terminal latitude and longitude, as terminal and central latitudes and longitudes were almost entirely correlated. We also only chose one of the altitude variables, as all four values were highly correlated. We settled on the mean altitude, as we felt this gave us a general picture of the altitude of the glacier. 

## Visualize Selected Variables

To visualize each of our selected features, we constructed histograms of each. This will help to see the distribution of selcted variables (normal? skewed? bimodal?), and outliers, and adjustments that may be needed.

![Terminal Longitude Histogram](Images/termlonHist.png)
*Figure 2: Histogram for Terminal Longitude*

![Terminal Latitude Histogram](Images/termlatHist.png)
*Figure 3: Histogram for Terminal Latitude*

![Mean Altitude Histogram](Images/zMeanHist.png)
*Figure 4: Histogram for Mean Glacier Altitude*

![Aspect Degree Histogram](Images/AspDegHist.png)
*Figure 5: Histogram for Aspect Degree*

![Slope Degree Histogram](Images/DegSlopeHist.png)
*Figure 6: Histogram for Slope Degree*

![Area Histogram](Images/AreaHist.png)
*Figure 7: Histogram for Glacier Area in Square Kilometers*

![Maximum Centerline Length Histogram](Images/lmaxHist2.png)
*Figure 8: Histogram for Maximum Centerline Length in Kilometers*

To get a clearer picture of the distribution of area and maximum centerline length of Alaskan glaciers, we zoomed in on these histograms (note that some data is cut off because of the zoom).

![Area Histogram Zoomed In](Images/Areazoom.png)
*Figure 9: Histogram for Glacier Area in Square Kilometers (zoomed in)*

![Maximum Centerline Length Histogram](Images/lmaxzoom.png)
*Figure 10: Histogram for Maximum Centerline Length in Kilometers (zoomed in)*

We also plotted area versus maximum centerline length, as we noted a strong positive correlation between these variables. We note three outliers with extremely large area and centerline length. 

![Area vs Lmax Scatterplot](Images/areavslmax.png)
*Figure 11: Area of glaciers vs. maximum centerline length*

### Conduct PCA Analysis

We prepared our data for PCA by centering each variable (subtracting the mean). We then conducted PCA by explicitly constructing and interpreting the SVD of the data matrix. 

During our exploration of PCA, we also decided to include the maximum and minimum altitudes for each glacier, as this made our PCA analysis more interesting. 

We constructed a scree plot for our 9 features, which shows how much variance of the dataset is explained with each principal component. We found that the first principal component explained the vast majority of the variance, with the second accounting for (essentially) the rest of the variance. We need at most 2 principal components to explain the majority of the data. 

![Initial Scree Plot](Images/initialscree.png)
*Figure 12: Initial PCA scree plot*

| Principal Component | Explained Variance | Explained Variance (%) |
|---------------------|--------------------|------------------------|
| PC1                 | 0.9556             | 95.56%                 |
| PC2                 | 0.0414             | 4.14%                  |
| PC3                 | 0.0019             | 0.19%                  |
| PC4                 | 0.0009             | 0.09%                  |
| PC5                 | 0.0001             | 0.01%                  |
| PC6                 | 0.0000             | 0.00%                  |
| PC7                 | 0.0000             | 0.00%                  |
| PC8                 | 0.0000             | 0.00%                  |
| PC9                 | 0.0000             | 0.00%                  |
*Table 1: Data variance accounted for by each principal component*

We then plotted the results of PCA, the reprojected data. We see from this how the first principal component dominates. 

![Initial Projected Data Plot](Images/initialpca.png)
*Figure 13: Initial projected data (Principal Component 1 vs. Principal Component 2)*

Finally, we examined the loadings for each principal component. These help us to interpret the meaning of each principal component. 

![Initial Loadings Plot](Images/initialloadings.png)
*Figure 14: Initial PCA loadings for PC1 and PC2*

These loadings allow us to physically interpret the PCA data. The first principal component has almost all the weight of its loading vector in the maximum centerline length. In other words, maximum centerline length can almost completely characterize the features of the data and is one of the most important features in the dataset, and it is weakly correlated with the maximum altitude and weakly negatively correlated with the minimum altitude. This means that if the maximum centerline length is large, the minimum altitude is likely to be (slightly) smaller and the maximum altitude is likely to be (slightly) larger when compared with other Alaskan glaciers. 

The second principal component indicates that most of the remaining variance in the data can be explained by the altitude components. This principal component indicates that the mean, minimum, and maximum altitudes are all associated with one another. This means that a glacier with a low mean altitude is likely to have a low minimum and low maximum altitude. In other words, these values align. 

### Further Exploration: Removing Outliers

We noted above the three glaciers with outlier values in mean centerline length and area. As an experiment, we removed these values and conducted PCA again to see how our results may change, since centerline length explained nearly all the variance in our previous PCA attempt.

When we did this, we found that PC1 and PC2 still explained nearly all of the variance in the dataset, but PC1 explained significantly less than it did in our initial PCA pass, and PC2 accounted for more of the variance, see **Table 2** and **Figure 15**. We certianly need the first two principal components to explain most of the variance, in this case. 

![Scree Plot with Outliers Removed](Images/outliersremovedscree.png)
*Figure 14: Scree plot for PCA with 3 area/centerline outliers removed*

| Principal Component | Explained Variance | Explained Variance (%) |
|---------------------|--------------------|------------------------|
| PC1                 | 0.7535             | 75.35%                 |
| PC2                 | 0.2443             | 24.43%                 |
| PC3                 | 0.0013             | 0.13%                  |
| PC4                 | 0.0008             | 0.08%                  |
| PC5                 | 0.0001             | 0.01%                  |
| PC6                 | 0.0001             | 0.01%                  |
| PC7                 | 0.0000             | 0.00%                  |
| PC8                 | 0.0000             | 0.00%                  |
| PC9                 | 0.0000             | 0.00%                  |
*Table 2: Variance explained by each principal component for PCA without area/centerline outliers*

We constructed the same PCA plot of PC1 and PC2 as before, see **Figure 16**. 

![PCA Plot Without Outliers](Images/outliersremovedpca.png)
*Figure 14: PC1 vs. PC2 for data with 3 outliers removed*

As before, we examined and interpreted the loadings. 

![Loadings Plot Without Outliers](Images/outliersremovedloadings.png)
*Figure 14: Loadings for PC1 and PC2 on data with 3 outliers removed*

These loadings plots still indicate that maximum centerline length is still highly important when characterizing the data. The first princpal component indicates that glaciers with a high (or low) maximum centerline length generally have a high (or low) average altitude, respectively. There is a small association with aspect degree and terminal longitude. The second principal component indicates that there is a subset of data where maximum centerline length is large but associated in the opposite manner, when compared with PC1, with altitude. That is, there are some glaciers that have large centerline length associated with low altitude. Aspect degree and terminal longitude are weakly associated with this component. 

Overall, these PCA results indicate that centerline length and altitude are features that are most highly important when characterizing Alaskan glaciers. 