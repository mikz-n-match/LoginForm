function handleLogin(event) {
    event.preventDefault();

    // 1. Get input values using the IDs we added to HTML
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // 2. Clear previous errors and success messages
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';

    let isValid = true;

    // 3. Validate username
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Email is required';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // 4. Validate password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // 5. If valid, show success message
    if (isValid) {
        console.log('Login attempt:', { username, password });
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('loginForm').reset();
    }
}