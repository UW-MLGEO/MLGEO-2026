### Ashley Howard and Cameron Boyd
# Alaska Glacier PCA

We started by dropping all columns containing strings, as we knew these wouldn't be relevant to our analysis. Then, we created a correlation matrix to get a feel for the data set.

![Correlation Matrix of Initial Data](../images/correlation_matrix.png)
 
Based on these correlations, you can see there are multiple variables representing latitude, longitude, and elevation. For our first round of analysis, we dropped zmin_m, zmax_m, and zmean_m, since they are all strongly correlated to zmed_m. 

In our initial analysis, we left all the other variables. We ended up with a PCA graph that looked like: 

![Initial PCA Components](../images/initial_PCA.png)

Basically all the variation in our data could be explained by the first two principal components. We investigated the weights behind these components and found:

![Initial PCA Loadings](../images/initial_loadings.png)

Our first principal axis was entirely driven by lmax_m, the maximum centerline length. The second principal axis was driven by zmed_m, the median elevation. We looked at the spread of data plotted on these two axes. 

![L_max Outlier Plot](../images/outlier_lmax.png)

The first axis, which corresponded to lmax_m, looked like it had some huge outliers. This was interesting, so we investigated the distribution of maximum centerline length and produced a histogram.

![l_max Histogram](../images/histogram.png)

The x-axis is length in meters, and the y-axis is frequency. The long tail extending out to the right goes on even further than pictured, but we zoomed in to provide a little more insight. Obviously, this data is really skewed by some large glaciers.

We decided to run a second set of analysis. This time, we got rid of all the unimportant integer values, as well as lmax_m and the geographic coordinates.

Our PCA turned up this result:

![Second PCA](../images/final_pca.png)

The data seems to still have some outliers, but certaintly less than it did before. We checked out the loadings and saw:

![Second PCA Loadings](../images/final_loadings.png)

Our loadings were still mostly determined by just 2 parameters. In this case, zmed_m drove the first principal axis, and aspect_deg drove the second. 

From our analysis, after removing the weirdly skewed data from maximum centerline length measurements, the biggest sources of variability were elevation and mean surface ascpect. It's not surprising that elevation has a large variance. Alaska is cold enough that it can have glaciers in mountains, valleys, and in-between. Surface aspect variance is also pretty intuitive. Surface aspect, or the direction the glacier's surface is facing, is normally determined by the impacts of solar radiation. Since Alaska is polar, glaciers may be less sensitive to sunlight-driven melting. 