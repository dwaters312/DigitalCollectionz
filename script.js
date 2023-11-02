const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.redirected) {
            // Redirect to the URL specified by the server (e.g., /main)
            window.location.href = response.url;
        } else {
            // Handle login failure (display an error message)
        }
    } catch (error) {
        console.error('Login request failed:', error);
    }
});

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid credentials. Please try again.");
        return false;
    }
}

app.post('/login', (req, res) => {
    // Check user's credentials in the database
    if (true) {
        // Store user information in the session
        req.session.user = username === "user" && password === "password";

        // Redirect to the main page
        res.redirect('/collection');
    } else {
        // Authentication failed, handle the error
        res.render('login', { error: 'Invalid credentials' });
    }
}); 

