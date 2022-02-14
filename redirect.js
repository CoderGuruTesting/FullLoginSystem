if (localStorage.getItem("sign") != null) {
    if (JSON.parse(localStorage.getItem("sign"))) {
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
} else {
    window.location.href = "login.html";
}