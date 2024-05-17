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

        const uvIndexElement = document.getElementById("uv_index");
        uvIndexElement.innerText = weather.uv_index_max + "";

        const showersElement = document.getElementById("showers_sum");
        showersElement.innerText = weather.showers_sum + " mm";

        // Generate and display suggestions
        const suggestionsElement = document.getElementById("suggestions");
        const suggestions = generateWeatherSuggestions(weather);
        suggestionsElement.innerText = suggestions;
    })
    .catch(error => console.log('Error:', error)); // Log any errors that occur

//------------------------------------------------------------------//

// Function to generate weather suggestions
function generateWeatherSuggestions(weatherData) {
    let suggestions = '';

    // Extract necessary weather data
    const tempMax = weatherData.temperature_2m_max[0]; // Maximum temperature for the day in °C
    const tempMin = weatherData.temperature_2m_min[0]; // Minimum temperature for the day in °C
    const uvIndexMax = weatherData.uv_index_max[0]; // Maximum UV index for the day
    const showersSum = weatherData.showers_sum[0]; // Total showers for the day in mm

    // Example logic for generating suggestions
    if (tempMax > 30) {
        suggestions += 'It is quite hot today. Consider wearing light clothing and staying hydrated. ';
    }

    if (uvIndexMax > 5) {
        suggestions += 'The UV index is high today. Make sure to wear sunscreen and protective clothing. ';
    }

    if (showersSum > 0) {
        suggestions += 'It looks like it will rain today. Don’t forget to bring an umbrella ☔️. ';
    }

    if (suggestions === '') {
        suggestions = 'The weather looks fine today. No special precautions needed.';
    }

    return suggestions;
}
