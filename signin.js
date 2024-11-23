document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please fill out all fields!');
        return;
    }

    // Here you can add further validation, e.g., check email format, password strength, etc.
    // Simulating sign-in process (for now, simply logging to the console)
    console.log('Sign In successful');

    // Redirect to index.html after successful sign-in
    window.location.href = 'index.html';  // Redirect to the homepage (index.html)
});
