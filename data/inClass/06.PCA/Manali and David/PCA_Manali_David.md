# PCA on glacier data

We decided to drop some variables such as terminus and surge type since they are categorical and not direct measurements. We also got rid of columns that contained strings and kept only the mean elevation instead of the the min and max elevation measurements.

We calculated the correlation coefficients between several variables in the dataset that we were interested in and found that the highest correlation was between 'Max Length' and 'Area'. Upon performing PCA we found that 98% of the variance is explained by the first Principal Component which is 'Max Length' and the second is driven by 'Mean Elevation' though this contributes weakly to the variance in comparison.

We find that the length of the glacier is weakly and negatively correlated with the slope of the glaciers, though this does not seem to contribute much to the variance.