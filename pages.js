var signouts = document.querySelectorAll("#signOut");

for (i = 0; i < signouts.length; i++) {
    signouts[i].addEventListener("click", function () {
        localStorage.setItem("sign", JSON.stringify(false));

        window.location.href = "signout.html";
    });
}

var users = JSON.parse(localStorage.getItem("users"));
var curIdx = JSON.parse(localStorage.getItem("currentUser"));

var open = document.getElementById("open");

document.getElementById("enterName").innerHTML = users[curIdx].username;

document.querySelector(".openPopup").addEventListener("click", function () {
    if (document.querySelector(".openPopup").innerHTML.includes("down")) {
        document.querySelector(".openPopup").innerHTML = '<i class="fas fa-chevron-up"></i>';

        document.getElementById("popup").style.display = "inline-block";
    } else {
        document.querySelector(".openPopup").innerHTML = '<i class="fas fa-chevron-down"></i>';

        document.getElementById("popup").style.display = "none";
    }
});