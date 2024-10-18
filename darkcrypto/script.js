document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Hardcoded credentials
    const username = 'user123987';
    const password = '7629';

    // Get user input
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    // Check credentials
    if (inputUsername === username && inputPassword === password) {
        window.location.href = 'https://franzbonaparta76.github.io/darkcrypto/dc/'; // Redirect on success
    } else {
        alert('Invalid credentials. Please try again.'); // Alert on failure
    }
});
