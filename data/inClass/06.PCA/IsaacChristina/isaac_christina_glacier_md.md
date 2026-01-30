## **In Class Assignment 1/28 Documentation** 
Isaac Olson and Christina Stuhl

The goal of this assignment was to run PCA on a dataset containing characteristics of an Alaska glacier in order to identify which parameter(s) might be most useful in determining the value of others, allowing us to down-size our dataset. Key parameters included physical properties such as glacier minimum and maximum elevation, mean slope, and metadata id 

#### **Download + Reduce Data**

Load data into csv + reduce by removing columns containing metadata. After an initial attempt at running PCA produced unusual results, we removed all data without clearly defined units (i.e., "surge type" contained a numerical value between 0 and 3, which was meaningless to us as we did not have documentation explaining what each value meant.) This left area, elevation (min, max, mean, median), slope, and aspect data in our dataframe. We dropped missing/NaN values from our dataframe.    

#### **Create Histograms for each of our variables to get sense of distributions**
![histograms](histograms.png)

#### **Plot Correlation Matrix**
From here we plot a correlation matrix to identify which variables have the highest correlation with others.

![correlation matrix](correlation_matrix.png)

##### **Plot PCA explained variance**
After running PCA on our reduced dataset, our results showed that PC1 explained 90.5% of variance within the dataset. Let's visualize our results:

![explained variance](explained_variance.png)

#### **PC1 vs PC2 scatterplot**
Scatterplot showing PC1 vs PC2 loadings. The results are fairly linear with exclusively +PC2 outliers.

![scatter plot](pca_scatter.png)

#### **Visualize Loadings from PC1 and PC2**

![loadings plot](pca_loadings.png)

#### **Analysis**

Visualizing our loadings makes clear what allowed for such a substantial PC1. PC1 has a strong effect on the variance of our four elevation parameters: minimum, maximum, mean and median, but almost none on the slope, aspect and area parameters. As elevation makes up four of our seven input variables, as well as the ones with the greatest variance (slope and aspect are fairly uniform), this allowed our PCA to identify a PC1 account for >90% of the variance dataset. PC2 shows a strong positive effect on minimum elevation, and a strong negative effect on maximum elevation, with minimal on mean and median elevation. This suggests that there is a strong contrast in the dataset between high, flat areas, and ones with steep relief, allowing the means to come out relatively even. From this PCA analysis, the best next step in analyzing this data would be to remove one of the minimum or maximum elevation variables, to try and identify correlations between the elevation data and slope/area data beyond simply capturing that our various elevation parameters influence each other. 


