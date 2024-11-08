document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    
    const validUsername = "admin"; 
    const validPassword = "password"; 

    
    if (username === validUsername && password === validPassword) {
       
        window.location.href = "main.html";
    } else {
       
        alert("Invalid username or password. Please try again.");
    }
});