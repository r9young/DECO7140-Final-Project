// Define the base URL for the Open-Meteo API
const baseUrl = "https://api.open-meteo.com/v1/forecast";

// Set up the query parameters manually to avoid URL encoding issues
const queryParams = "latitude=-27.4679&longitude=153.0281&daily=temperature_2m_max,temperature_2m_min,uv_index_max,showers_sum&timezone=Australia%2FSydney&forecast_days=1";

// Construct the full URL by appending the query string to the base URL
const urlWithParams = `${baseUrl}?${queryParams}`;

console.log(urlWithParams); // Log the constructed URL to the console

// Set up the request options
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// Perform the fetch request
fetch(urlWithParams, requestOptions)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        // Extract the daily weather data from the response
        const weather = data.daily;
        console.log(weather);
        // Update the DOM elements with the data
        const temperatureElement = document.getElementById("max_temperature");
        temperatureElement.innerText = weather.temperature_2m_max + "°C";

        const rainElement = document.getElementById("min_temperature");
        rainElement.innerText = weather.temperature_2m_min + "°C";

        const windspeedElement = document.getElementById("uv_index");
        windspeedElement.innerText = weather.uv_index_max + "";

        const  cloudcoverElement= document.getElementById("showers_sum");
        cloudcoverElement.innerText = weather.showers_sum + " mm";

    })
    .catch(error => console.log('Error:', error)); // Log any errors that occur
