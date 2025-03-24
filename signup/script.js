 document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const lastname = document.getElementById("lastname").value;
    const strand = document.getElementById("strand").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    const newUser = {
        username: username,
        lastname: lastname,
        strand: strand,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registration successful! You can now log in.");
    window.location.href = "../login/index.html";
});