# PCA Process
### Initial Data
We first loaded the data and used describe to understand the summary aggregate values such as mean, standard deviation and so on.

### Plotting
We plotted a bunch of the continuous variables (e.g. area and elavation measures). This is where we got a good idea of what the distributions of variables looked like and visually assess where some relationships might already lie.

### PCA
Our Steps:
Select most continuous columns except for some, such as zmean_m since zmed_m is just the mean vs median.
Preformed PCA via SVD with both centered and raw data.
Graphed the first 2 Components since they accounted for over 99% of the variance.
Plotted Loadings to determine important columns.

## Selected Variables From PCA
1. On PC1, lmax_m (maximum centerline length) has a loading close to -1, so on the same axis as PC1 but opposite, meaning the maximum centerline length explains almost all the variance in PC1.
2. On PC2, zmin_m, zmax_m, zmed_m (Min elevation, max elevation, median elevation) have loading around 0.5, increasing together and each having meaningful contributions to the variance in this component.

## Summary of PCA
PC1 is focused on variance of centerline length and PC2 is a focus on all 3 elevation variables.