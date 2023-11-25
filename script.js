function authIndex() {
    if (localStorage.getItem("token") !== null)
        window.location.href = `${window.location.href}profile.html`;
}

function authProfile() {
    if (localStorage.getItem("token") === null)
        window.location.href = "https://theayan44.github.io/user_authentication_contest/";
    else
        showDetails();
}

function createAccount() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const conPassword = document.getElementById("con_password");
    const errMsg = document.getElementsByClassName("error-message")[0];

    if (name.value == "" || email.value == "" || password.value == "" || conPassword.value == "") {
        errMsg.style.display = "block";
        return;
    }

    if (password.value !== conPassword.value) {
        alert("Password and Confirm Password are not matched!");
        return;
    }

    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("token", generateString(16));
    localStorage.setItem("password", password.value);

    alert("Sign up successful!");

    window.location.href = `${window.location.href}profile.html`;


}

function showDetails() {
    const showName = document.getElementById("show-name");
    const showEmail = document.getElementById("show-email");
    const showToken = document.getElementById("show-token");
    const showPassword = document.getElementById("show-password");

    showName.innerText = localStorage.getItem("name");
    showEmail.innerText = localStorage.getItem("email");
    showToken.innerText = localStorage.getItem("token");
    showPassword.innerText = localStorage.getItem("password");
}

function logout() {
    localStorage.clear();
    window.location.href = "https://theayan44.github.io/user_authentication_contest/";
}

function generateString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}