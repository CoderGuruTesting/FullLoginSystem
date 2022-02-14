if (JSON.parse(localStorage.getItem("sign"))) {
    window.location.href = "home.html"
}

// if (localStorage.getItem("users") == null) {
//     var users = [];

//     localStorage.setItem("users", JSON.stringify(users));
//     firebase.database().ref('users/').set({testData: "data"});
// } else {
//     var users = JSON.parse(localStorage.getItem("users"));

//     for(i = 0; i < users.length; i++) {
//         firebase.database().ref('users/' + window.btoa(users[i].email)).set({
//             username: users[i].username,
//             email: users[i].email,
//             password: users[i].password,
//         });
//     }
// }

var usersRef = firebase.database().ref('users');
usersRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});

var cont;

var emailError = document.querySelector(".errorEmail");
var passwordError = document.querySelector(".errorPassword");

function emailErrorShow(value) {
    emailError.style.display = "block";
    emailError.innerHTML = value;
}

function passwordErrorShow(value) {
    passwordError.style.display = "block";
    passwordError.innerHTML = value;
}

var loginBtn = document.querySelector(".loginButton");

loginBtn.addEventListener("click", function () {
    emailError.style.display = "none";
    passwordError.style.display = "none";

    if (document.querySelector(".loginCredentialEmail").value.length != 0) {
        cont = true;
    } else {
        cont = false;

        emailErrorShow("Please Enter Email");
    }

    if (document.querySelector(".loginCredentialPassword").value.length != 0) {
        cont = true;
    } else {
        cont = false;

        passwordErrorShow("Please Enter Password");
    }

    if (cont && document.querySelector(".loginCredentialPassword").value.length != 0 && document.querySelector(".loginCredentialEmail").value.length != 0) {
        if (document.querySelector(".loginCredentialEmail").value.split('@').length - 1 == 1 && document.querySelector(".loginCredentialEmail").value.split('.').length - 1 == 1) {
            validate();
        } else {
            cont = false;

            emailErrorShow("Please Enter a Valid Email")
        }
    }
});

Array.prototype.indexOfObject = function (property, value) {
    for (let i = 0, len = this.length; i < len; i++) {
        if (this[i][property] === value) {
            return i;
        }
    }
    return -1;
}

function validate() {
    var email = document.querySelector(".loginCredentialEmail");
    var password = document.querySelector(".loginCredentialPassword");

    let checkEmail = users.some((ele) => ele.email === email.value);

    if (checkEmail) {
        var idx = users.indexOfObject("email", email.value);

        if (users[idx].password == password.value) {
            localStorage.setItem("sign", JSON.stringify(true));
            localStorage.setItem("currentUser", JSON.stringify(idx));
            localStorage.setItem("rememberMe", JSON.stringify(document.getElementById("rem").checked))

            window.location.href = "home.html";
        } else {
            passwordErrorShow("Incorrect Password");
        }
    } else {
        emailErrorShow("An Account With That Email Doesn't Exist!");
    }
}