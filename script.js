function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const isRobotChecked = document.getElementById('robotCheck').checked;

    // Validate the login credentials (basic simulation)
    if (email === "otis.minecraft@example.com" && password === "ayushpgviiib" && isRobotChecked) {
        // Hide login section and show success page
        document.querySelector('.login-section').style.display = 'none';
        document.getElementById('successPage').style.display = 'block';
        document.getElementById('userEmail').textContent = email;
    } else {
        alert("Invalid credentials or please confirm you're not a robot.");
    }
}
