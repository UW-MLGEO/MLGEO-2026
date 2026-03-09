# Documentation for PCA Assignment 

## Chosen Features 
    **Reference: https://www.glims.org/rgi_user_guide/products/glacier_product.html** 

    Need to only pick those features which contribute to the actual physical properties of the glacier rather than providing metadata and context for that given glacier. Reference source used to determine which datatypes are useful for PCA. 

    List of all features in the dataset: ('rgi_id', 'o1region', 'o2region', 'glims_id', 'anlys_id', 'subm_id',
       'src_date', 'cenlon', 'cenlat', 'utm_zone', 'area_km2', 'primeclass',
       'conn_lvl', 'surge_type', 'term_type', 'glac_name', 'is_rgi6',
       'termlon', 'termlat', 'zmin_m', 'zmax_m', 'zmed_m', 'zmean_m',
       'slope_deg', 'aspect_deg', 'aspect_sec', 'dem_source', 'lmax_m')

    Dropped features: ('rgi_id', 'o1region', 'o2region', 'glims_id', 'anlys_id', 'subm_id', 'src_date', 'cenlon', 'cenlat', 'utm_zone', 'primeclass', 'conn_lvl', 'surge_type', 'term_type', 'glac_name', 'is_rgi6', 'termlon', 'termlat', 'dem_source', 'aspect_sec')

    Used features: ('area_km2', 'zmin_m', 'zmax_m' 'zmed_m', 'zmean_m', 'slope_deg', 'aspect_deg', 'lmax_m') 

    All of these dropped features are either metadata or a numerical classfier (values are integers corresponding to flags, value of 1 indicates some subjective flag). The remaining used features are all objective numerical measurements that quantify the shape of the glacier (lengths and slopes). 

## PCA Physical Interpretation 

### PC1
    The components ('zmin_m', 'zmax_m' 'zmed_m', 'zmean_m', 'slope_deg') are heavily correlated in PC1 space, this primarily indicates the slope and elevation change of the glacier profile which makes sense since all these values are derived from the DEM. 

### PC2 
    The components ('area_km^2', 'lmax_m') are strongly correlated in PC2 space. This primarily constrains for the overall size of the glacier as both capture features capture the maximal physical extent of the glacier (area is pretty self explanatory, lmax refers to the maximum length of the glacier). 

## Final Analysis/Interpretation 
    The principal components of all DEM-derived components of an RGI dataset primarily classes glaciers based on their geometry and shape which makes absolute sense since that is all the dataset really captures outside of subjective classifcations of glacier flow and connectivity. My hypothesis is that higher PC spaces will capture some other components of shape (say the relationship between aspect and the glacier profile, indirect view of Alaskan topography). Thus RGI datasets accumlated over the years can used to quantify glacial retreat due to global warming and verify flow models. 