document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('errorMessage');

    // Simple check for matching passwords
    if (password.value !== confirmPassword.value) {
        errorMessage.textContent = 'Passwords do not match';
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';

        // Clear error message and styles after 3 seconds
        setTimeout(() => {
            errorMessage.textContent = '';
            password.style.borderColor = '#ccc';
            confirmPassword.style.borderColor = '#ccc';
        }, 3000);
    } else {
        // On successful signup (just for demonstration)
        alert('Sign Up successful!');
    }
});
