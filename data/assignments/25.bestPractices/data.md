<<<<<<< HEAD
## Ashley and Cameron
* Data sources should be open and accessible. 
    * Wilkinson, M., Dumontier, M., Aalbersberg, I. et al. The FAIR Guiding Principles for scientific data management and stewardship. Sci Data 3, 160018 (2016). https://doi.org/10.1038/sdata.2016.18
* Check your data for gaps, missing values, outliers, and other inconsistencies. Understand the units, uncertainties, and statistical distribution of the data. 
<figure>
  <img src="image.png" alt="Description of image">
  <figcaption><strong>Figure 1:</strong> Example of data distribution and statistical characteristics for our subglacial lake identification project using satellite altimeter data.</figcaption>
</figure>

* Document your data sources and any processing steps as you work with it to keep track of changes or make your processing more accessible to future users.
* Reduce dimensionality using techniques like filtering or PCA. Carefully consider the question you are trying to answer when selecting parameters and dimensions. 
=======
# Manali, David, and Filip

## Data best practices:

1. Ensure that the data is clean: consistent data collection, data entries, remove useless variables or NaNs.
2. Make sure there is enough data: Use data expansion methods like Monte Carlo to expand the dataset.
3. The data should be actually useful to the question you are asking.
4. Reduce data dimensionality, so that you need less computational power.
5. Know about all the alternative datasets, so you understand why exactly you are using this specific dataset.
6. Save processed data separately from the unprocessed files.
7. Understand the format of your files, and transforming it so that your model can read/process them.
# Clouds Team
Angel Chui, Lesly Silva, Sofia Vakhutinsky

## Best Practices for Data
- Read through existing literature for similar topic/data to figure out what has been done, what datasets or type of data has been used, and what methods have been used to get an idea of what could or could not work. (Review papers if available can be helpful for this).
- For Data Source
    - Ideally find a data source that is open source and is regularly maintained by the hosting agency/service (e.g. some agencies provide data that is already quality controlled)
    - Find a data source that is in a commonly used data format and type
- For ML usage
    - Can be helpful to find data that is not spatially or temporally sparse to avoid needing to do additional steps such as resampling
    - Explore meta data of dataset and make intial plots to visualize data to ensure type of data is appropriate
    - Before using the data for ML, it may be useful to do some pre-processing such as reducing the number of dimensions so during ML it is more efficient
### Group: Olivia Murdock and Sofia Suhinin
_What considerations about data should research take into account?_

- Accessibility & Organisation:
    - Easily accessible data via API or website download
        - APIs: enabling you to engage with applications and data via code
        - MCPs: Model Context Protocols, enabling AI agents to connect and engage with applications and data 
    - Well documented (i.e., clear instructions for access, sufficient amount of data (through resolution or time))
    - Well organized documentation of data (i.e., if used in past, how did previous authors process this data...)
    - Reputable data source
        - Good geoscience sources: NOAA, USGS, NSIDC, ESA, NASA, EarthData
- Relevance
    - Data is relevant to desired project, i.e., time scale, spatial scale etc. 
        - Using ICESat-2 for ice sheet/glaciology research as opposed to seismology
    - Can use data to contribute/fill 'science gap'
    - Most up to date data source
- Storage & Back Up
    - Is the size of the data realistic for your project, i.e., do you need to size down or find a way to store data
    - DO NOT store on git
    - Keep a local and online back up 
    - Keep a separate folder for data, only (data) copy from it never write back to it 













>>>>>>> 14a8371dc9fbea76c48eaa5f1003c49ac7ff160f
