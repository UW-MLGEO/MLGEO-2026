# Glacier PCA
## Ellie, Olivia, Sofia

We started by dropping all string data and categorical data


We then created a correlation coefficient matrix in order to determine the minimum amount of dependencies as needed. 
![alt text](image-7.png)
Once we created this we were able to see that we could drop 18 columns total, having a component matrix which had the necessary dependencies
![alt text](image-8.png)
Using the remaining data we were able to visualize through different mediums

### Mean Surface Slope Distribution
![alt text](image-5.png)
There is a normal distribution with a range of 56.

### Glacier Area vs. Mean Surface Slope
![alt text](image-4.png)
When looking at this data, we knew that the data follow a log normal distribution, we then created a graph to visualize this and reduce skew

### Glacier Area vs. Log(Mean Surface Slope) 
![alt text](image-3.png)
Using the log normal data we were able to better interpret the graph and distribution.
### Scree plot
![alt text](image-1.png)
We then created a scree plot to show the importance behind our variances within the data sets

PC 1 has the most explained variance, while the other Principal components have significantly less.

### PC graphs

![alt text](image.png)
While most of the data points are randomly distributed around 0
![alt text](image-6.png)
We can see in the Loadings graphs that our components are almost entirely unique with PC1 being entirely affected by aspect degree, and PC2 being almost entirely affected by area (km^2)