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