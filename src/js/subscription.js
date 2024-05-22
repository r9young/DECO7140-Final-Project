document.getElementById('subscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const firstName = document.getElementById('firstName').value;
    const suburb = document.getElementById('suburb').value;
    const email = document.getElementById('email').value;

    const payload = {
        first_name: firstName,
        suburb: suburb,
        email: email
    };

    // Use the correct URL for POST requests
    // const url = "http://127.0.0.1:8000/api/subscribe/"; // Local URL for POST
    const url = "https://subscriptform-bb8f9e1be2db.herokuapp.com/api/subscribe/"; // Heroku URL for POST
    const method = 'POST';
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(payload) // Convert payload to JSON string
        });

        const data = await response.json();

        const responseMessage = document.getElementById('responseMessage');

        if (response.ok) {
            responseMessage.innerText = "Thank you for your subscription! Please check your email for confirmation.";
        } else {
            responseMessage.innerText = "An error occurred. Please try again.";
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = "An error occurred. Please try again.";
    }
});