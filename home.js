if (localStorage.getItem("sign") == null) {
    window.location.href = "login.html";
} else {
    if (JSON.parse(localStorage.getItem("sign")) == false) {
        window.location.href = "login.html";
    }
}

// var users = JSON.parse(localStorage.getItem("users"));
// var curIdx = JSON.parse(localStorage.getItem("currentUser"));

// document.querySelector("h1").innerHTML = "Welcome " + users[curIdx].username;

// document.getElementById("signOut").addEventListener("click", function () {
//     localStorage.setItem("sign", JSON.stringify(false));

//     window.location.href = "signout.html";
// });