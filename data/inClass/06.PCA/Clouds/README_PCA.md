# PCA Documentation
## Angel, Sofia, Lesly

## Data Cleaning

We first cleaned the dataset by removing columns that were not useful for PCA. These included identifier fields, regional 
labels, and other qualitative variables that do not represent physical measurements of glaciers. 

---

## Feature Selection

After cleaning the data, we noticed that the variable for maximum glacier length explained almost all of the variation in the 
dataset (about 99%). Because this one variable dominated the PCA results, we removed it so we could better see what other 
variables were contributing to the patterns in the data.

We mainly dropped these features because they were qualitative instead of quantitative, or because they were overwhelming the 
PCA results (i.e. explaining 99% of the variance).

---

## PCA Results

The PCA results show that:

- **PC1** is mainly related to **glacier aspect (degrees)**  
- **PC2** is mainly related to **glacier area (km²)**  

---

## Interpretation of Principal Components

**PC1 (Glacier Aspect):**  
PC1 represents variation in glacier orientation. This suggests that the dominant pattern in the data is related to the direction 
that glaciers face, which can influence incoming solar radiation and melt rates.

**PC2 (Glacier Area):**  
PC2 represents variation in glacier size. This component captures differences between small and large glaciers and reflects 
geometric differences among glaciers.

---

## Summary

PCA indicates that, after removing dominant and non-qualitative variables, the primary patterns in the dataset are controlled 
by glacier orientation and glacier size. These two components describe the most important physical differences among glaciers in 
the dataset.

