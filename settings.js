if (localStorage.getItem("sign") == null) {
    window.location.href = "login.html";
} else {
    if (JSON.parse(localStorage.getItem("sign")) == false) {
        window.location.href = "login.html";
    }
}

var users = JSON.parse(localStorage.getItem("users"));
var curIdx = JSON.parse(localStorage.getItem("currentUser"));

document.getElementById("username").value = users[curIdx].username;
document.getElementById("email").value = users[curIdx].email;

document.getElementById("username").addEventListener("change", function () {
    if (document.getElementById("username").value.length > 0) {
        users[curIdx].username = document.getElementById("username").value;

        localStorage.setItem("users", JSON.stringify(users));
    }
});

var emailError = document.querySelector(".errorEmail");

function emailErrorShow(value) {
    emailError.style.display = "block";
    emailError.innerHTML = value;
}

document.getElementById("username").addEventListener("change", function () {
    changed();
});

document.getElementById("email").addEventListener("change", function () {
    let checkEmail = users.some((ele) => ele.email === document.getElementById("email").value);

    if (document.getElementById("email").value == users[curIdx].email) {
        checkEmail = false;
    }

    if (document.getElementById("email").value.length != 0) {
        if (document.querySelector("#email").value.split('@').length - 1 == 1 && document.querySelector("#email").value.split('.').length - 1 == 1) {
            if (!checkEmail) {
                emailError.style.display = "none";

                users[curIdx].email = document.getElementById("email").value;

                localStorage.setItem("users", JSON.stringify(users));

                changed();
            } else {
                emailErrorShow("Email Already in Use");
            }
        } else {
            emailErrorShow("Please Enter a Valid Email");
        }
    } else {
        emailErrorShow("Please Enter an Email");
    }
});

function changed() {
    document.querySelector(".infoChanged").style.display = "block";

    window.setTimeout(hideIt, 2000);
}

function hideIt() {
    document.querySelector(".infoChanged").style.display = "none"
}