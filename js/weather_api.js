// Define the base URL for the Open-Meteo API
const baseUrl = "https://api.open-meteo.com/v1/forecast";

// Set up the query parameters for the API request
const queryParams = {
    latitude: "52.52", // Adjusted latitude for Berlin
    longitude: "13.41", // Adjusted longitude for Berlin
    daily: "temperature_2m_max,temperature_2m_min,rain_sum", // Requesting daily max/min temperature and rain sum
    timezone: "Australia/Sydney" // Ensuring timezone is set correctly
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

function getWeekday(dateString) {
    const date = new Date(dateString);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[date.getDay()];
}


// Perform the fetch request to the API
// Assuming the rest of your existing script is above

fetch(urlWithParams, requestOption)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        const { time, temperature_2m_max, temperature_2m_min, rain_sum } = data.daily;
        
        // Create a table element
        const table = document.createElement('table');
        table.style.width = '100%'; // Styling the table width
        
        // Create a header row
        const headerRow = table.insertRow();
        const headers = ["Date", "Weekday", "Max Temperature (°C)", "Min Temperature (°C)", "Rainfall (mm)"];
        headers.forEach(headerText => {
            let headerCell = document.createElement('th');
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });

        // Fill the table with weather data
        time.forEach((date, index) => {
            const row = table.insertRow();
            const weekday = getWeekday(date);
            
            const dateCell = row.insertCell();
            dateCell.textContent = date;

            const weekdayCell = row.insertCell();
            weekdayCell.textContent = weekday;

            const maxTempCell = row.insertCell();
            maxTempCell.textContent = temperature_2m_max[index];

            const minTempCell = row.insertCell();
            minTempCell.textContent = temperature_2m_min[index];

            const rainCell = row.insertCell();
            rainCell.textContent = rain_sum[index];
        });

        // Append the table to the placeholder div
        document.getElementById('weatherTableContainer').appendChild(table);
    })
    .catch(error => console.log('Error:', error)); // Log any errors that occur
