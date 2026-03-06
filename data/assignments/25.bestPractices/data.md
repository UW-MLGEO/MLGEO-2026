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













