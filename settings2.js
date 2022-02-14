document.querySelector(".showHide").addEventListener("click", function () {
    if (document.getElementById("password").type == "password") {
        document.getElementById("password").type = "text";
        document.getElementById("passwordConfirm").type = "text";

        document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye-slash"></i>';
        document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        document.getElementById("password").type = "password";
        document.getElementById("passwordConfirm").type = "password";

        document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye"></i>';
        document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye"></i>';
    }
});

document.querySelector(".showHide2").addEventListener("click", function () {
    if (document.getElementById("password").type == "password") {
        document.getElementById("password").type = "text";
        document.getElementById("passwordConfirm").type = "text";

        document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye-slash"></i>';
        document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        document.getElementById("password").type = "password";
        document.getElementById("passwordConfirm").type = "password";

        document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye"></i>';
        document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye"></i>';
    }
});

var error1 = document.querySelector(".error1");
var error2 = document.querySelector(".error2");

function error1Show(value) {
    error1.style.display = "block";
    error1.innerHTML = value;
}

function error2Show(value) {
    error2.style.display = "block";
    error2.innerHTML = value;
}

var users = JSON.parse(localStorage.getItem("users"));
var curIdx = JSON.parse(localStorage.getItem("currentUser"));

document.getElementById("change").addEventListener("click", function () {
    error1Show("&nbsp;");
    error2Show("&nbsp;");

    if (document.getElementById("password").value.length == 0) {
        error1Show("Please Enter Password");
    }

    if (document.getElementById("passwordConfirm").value.length == 0) {
        error2Show("Please Enter Password");
    }

    if (document.getElementById("password").value.length != 0 && document.getElementById("passwordConfirm").value.length != 0) {
        if (document.getElementById("password").value.length >= 8 && !(document.getElementById("password").value.indexOf(" ") >= 0)) {
            if (document.getElementById("passwordConfirm").value == document.getElementById("password").value) {
                users[curIdx].password = document.getElementById("password").value;

                localStorage.setItem("users", JSON.stringify(users));

                document.getElementById("password").value = "";
                document.getElementById("passwordConfirm").value = "";

                changed();
            } else {
                error2Show("Passwords do not Match")
            }
        } else {
            error1Show("Please Enter a Valid Password");
        }
    }
});

function changed() {
    document.querySelector(".infoChanged").style.display = "block";

    window.setTimeout(hideIt, 2000);
}

function hideIt() {
    document.querySelector(".infoChanged").style.display = "none"
}