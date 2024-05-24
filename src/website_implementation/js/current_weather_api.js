// Base URL for the Open-Meteo API
const baseUrl = "https://api.open-meteo.com/v1/forecast";

// Set up the query parameters manually to avoid URL encoding
const queryParams = "latitude=-27.4679&longitude=153.0281&current=temperature_2m,rain,cloud_cover,wind_speed_10m";

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
        // Extract the current weather data from the response
        const weather = data.current;
        console.log(weather); // Log the current weather data to the console

        // Update the DOM elements with the data
        const temperatureElement = document.getElementById("today_temperature");
        temperatureElement.innerText = weather.temperature_2m + "°C";

        const rainElement = document.getElementById("today_rain");
        rainElement.innerText = weather.rain + " mm";

        const windspeedElement = document.getElementById("today_wind");
        windspeedElement.innerText = weather.wind_speed_10m + " km/h";

        const  cloudcoverElement= document.getElementById("today_cloudcover");
        cloudcoverElement.innerText = weather.cloud_cover + " %";

    })
    .catch(error => console.log('Error:', error)); // Log any errors that occur
