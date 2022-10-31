# This is an example for StepZen weather API
import os
import sys
import requests
# Please set your StepZen access key here
access_key = "Your StepZen access key"
# Please set the URL for the StepZen weather API endpoint
url = "https://api.stepzen.com/v1/weather"
# Please set the latitude and longitude for the location
# for which you want to get the weather information
latitude = "37.386"
longitude = "-122.08"
# Please set the start date and end date for which you want to get the weather information
start_date = "2019-01-01"
end_date = "2019-01-31"
# Please set the units for the weather information
units = "m"
# Set the headers for the HTTP request
headers = {
    "Content-Type": "application/json",
    "X-Api-Key": access_key
}
# Set the parameters for the HTTP request
params = {
    "latitude": latitude,
    "longitude": longitude,
    "startDate": start_date,
    "endDate": end_date,
    "units": units
}
# Execute the HTTP request
response = requests.get(url, headers=headers, params=params)
# Check for HTTP codes other than 200
if response.status_code != 200:
    print("HTTP error: {} - {}".format(response.status_code, response.text))
    sys.exit(1)
# Print the response from the StepZen weather API
print(response.json())
