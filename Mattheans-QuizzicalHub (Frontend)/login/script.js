document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful! " + user.username);
        window.location.href = "../Main/Homepage.html";
    } else {
        alert("Invalid username or password!");
    }
});