// Display user information in the dropdown
function displayUserInfo() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email'); // Match key with login.html
    
    if (username && email) {
        document.getElementById('user-name').textContent = `Username: ${username}`;
        document.getElementById('user-email').textContent = `Email: ${email}`;
    } else {
        console.warn('User information is missing in localStorage');
    }
}

// Toggle the dropdown menu visibility
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// Logout function to clear stored user info
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = 'login.html';
}

// Initialize user info display on page load
displayUserInfo();
