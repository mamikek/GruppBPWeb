function saveUserInfo() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Store user info in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
}
