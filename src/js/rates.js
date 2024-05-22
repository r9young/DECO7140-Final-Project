document.addEventListener('DOMContentLoaded', (event) => {
    const radioButtons = document.querySelectorAll('input[name="stars"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleInputChange);
    });

    document.getElementById('summarizeBtn').addEventListener('click', fetchRatingsSummary);
});

const handleInputChange = (event) => {
    event.preventDefault();
    let selectedRating = parseInt(document.querySelector('input[name="stars"]:checked').value, 10);
    let responseMessage = document.getElementById("response_message");

    let payload = {
        "five_stars": selectedRating === 5 ? 1 : 0,
        "four_stars": selectedRating === 4 ? 1 : 0,
        "three_stars": selectedRating === 3 ? 1 : 0,
        "two_stars": selectedRating === 2 ? 1 : 0,
        "one_star": selectedRating === 1 ? 1 : 0
    };

    const url = "https://r9youngfirstapi-74b464a64841.herokuapp.com/api/starts/";
    const method = 'POST';
    const headers = {
        "Content-Type": "application/json"
    };

    fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'added') {
            responseMessage.innerText = "Your rating has been submitted successfully!";
        } else if (data.message === 'error') {
            responseMessage.innerText = "An error occurred. Please try again later.";
        }
    })
    .catch(error => {
        responseMessage.innerText = "An error occurred. Please try again later.";
    });
};

const fetchRatingsSummary = async (event) => {
    event.preventDefault();
    const url = "https://r9youngfirstapi-74b464a64841.herokuapp.com/api/starts/";
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        let summary = {
            five_stars: 0,
            four_stars: 0,
            three_stars: 0,
            two_stars: 0,
            one_star: 0
        };
        
        data.forEach(item => {
            summary.five_stars += item.five_stars;
            summary.four_stars += item.four_stars;
            summary.three_stars += item.three_stars;
            summary.two_stars += item.two_stars;
            summary.one_star += item.one_star;
        });

        document.getElementById('five_stars_summary').innerText = summary.five_stars;
        document.getElementById('four_stars_summary').innerText = summary.four_stars;
        document.getElementById('three_stars_summary').innerText = summary.three_stars;
        document.getElementById('two_stars_summary').innerText = summary.two_stars;
        document.getElementById('one_star_summary').innerText = summary.one_star;
        
        updateChart(summary);
        
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};


