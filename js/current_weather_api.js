// https://api.open-meteo.com/v1/forecast?latitude=-27.4679&longitude=153.0281&current_weather=true 

// Define the base URL for the Open-Meteo API
const baseUrl = "https://api.open-meteo.com/v1/forecast";

// Set up the query parameters for the API request
const queryParams = {
    latitude: "-27.4679",
    longitude: "153.0281",
    current_weather: "true"
};

// Create a query string from the parameters using URLSearchParams
const queryString = new URLSearchParams(queryParams).toString();

// Construct the full URL by appending the query string to the base URL
const urlWithParams = baseUrl + "?" + queryString;

// Define the options for the fetch request
const requestOption = {
    method: 'GET',
    redirect: 'follow'
};

// Perform the fetch request to the API
fetch(urlWithParams, requestOption)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        // Extract the current weather data from the response
        const weather = data.current_weather;
        // Log the current temperature
        console.log("Current temperature: " + weather.temperature + "°C");
        const temperature_element = document.getElementById("today_temperature");
        temperature_element.innerText = weather.temperature + "°C";
    })
    .catch(error => console.log('Error:', error)); // Log any errors that occur
