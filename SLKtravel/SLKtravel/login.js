document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    // Dummy check for incorrect credentials
    if (username.value !== 'admin' || password.value !== 'password') {
        errorMessage.textContent = 'Incorrect username or password';
        username.style.borderColor = 'red';
        password.style.borderColor = 'red';

        // Clear error message and styles after 3 seconds
        setTimeout(() => {
            errorMessage.textContent = '';
            username.style.borderColor = '#ccc';
            password.style.borderColor = '#ccc';
        }, 3000);
    } else {
        // On successful login (just for demonstration)
        alert('Login successful!');
    }
});
