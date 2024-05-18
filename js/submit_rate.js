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

document.getElementById('rateform').addEventListener('submit', handleInputChange);
