
import requests
import pandas as pd
import matplotlib.pyplot as plt

# api pull from NOAA of Stehekin weather station precipitation data

url = "https://www.ncei.noaa.gov/cdo-web/api/v2/data"
headers = {"token": "qwmteOhCQypbxqnKZfwSNBDZAUhHywgA"}
params = {
    "datasetid": "GHCND",
    "stationid": "GHCND:USC00458059",
    "startdate": "2025-12-01",
    "enddate": "2025-12-31",
    "limit": 1000
}

response = requests.get(url, headers=headers, params=params)
data = response.json()

# convert to pandas dataframe
daily_data = data.get("results", [])  
df = pd.DataFrame(daily_data)
cleaned_df = df[df['datatype'] == 'PRCP']
cleaned_df['value'] = cleaned_df['value'] / 10
cleaned_df['date'] = pd.to_datetime(cleaned_df['date']).dt.date

# graph
fig, ax = plt.subplots(figsize=(16, 6))

cleaned_df.plot(x='date', y='value', kind='line', marker='o', ax=ax)

ax.set_xlabel('Date')
ax.set_ylabel('Daily precipitation (mm)')
ax.set_title('Daily Precipitation for Stehekin, Dec 2025')

plt.show()
