// write code here
let username = prompt("Please enter Username:");
if (username === "") alert("Username is required!");
else {
    let password = prompt("Please enter Password");
    if (password === "") alert("Password is required!");
    else {
        if ((username === "admin" && password === "1234") ||
            (username === "john" && password === "qwerty"))
            alert(`Hello ${username}`);
        else alert(`Invalid Username or Password`);
    }
}