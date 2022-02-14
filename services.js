function sort(input2, ul2, li2) {
    var i;
    var input = input2;
    var filter = input.value.toLowerCase();
    var ul = ul2;
    var li = li2;
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("span")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.getElementById("search").oninput =  function() {
    sort(document.getElementById("search"), document.querySelector(".services"), document.querySelectorAll(".service"))
};

var tiles = {
    images: ['<i class="fab fa-amazon"></i>', '<i class="fab fa-windows"></i>', '<i class="fab fa-apple"></i>', '<i class="fab fa-android"></i>', '<i class="fab fa-linux"></i>'],
    titles: ["Amazon", "Windows", "Apple", "Android", "Linux"],
    links: ["https://www.amazon.com/", "https://www.microsoft.com/en-gb/windows", "https://www.apple.com/", "https://www.android.com/", "https://www.linux.org/"],
    contacts: {
        emails: ["N/A", "N/A", "N/A", "N/A", "N/A"],
        phoneNumbers: ["N/A", "N/A", "N/A", "N/A", "N/A"],
    },
}

function loadTiles() {
    var services = document.querySelector(".services");
    services.innerHTML = "";

    for(i = 0; i < tiles.titles.length; i++) {
        var service = document.createElement("div");
        service.classList.add("service");

        var serviceImage = document.createElement("div");
        serviceImage.classList.add("serviceImage");
        serviceImage.innerHTML = tiles.images[i];

        service.appendChild(serviceImage);

        var serviceTitle = document.createElement("span");
        serviceTitle.classList.add("serviceTitle");
        serviceTitle.innerHTML = tiles.titles[i];

        service.appendChild(serviceTitle);

        var serviceBtns = document.createElement("div");
        serviceBtns.classList.add("serviceBtns");

        var serviceBtn = document.createElement("a");
        serviceBtn.classList.add("serviceBtn");
        serviceBtn.href = tiles.links[i];
        serviceBtn.target = "_blank";
        serviceBtn.innerHTML = '<i class="fas fa-globe"></i> Visit Site';

        serviceBtns.appendChild(serviceBtn);

        var serviceBtn2 = document.createElement("button");
        serviceBtn2.classList.add("serviceBtn");
        serviceBtn2.id = i.toString();
        serviceBtn2.innerHTML = '<i class="fas fa-phone-alt"></i> Contact';

        serviceBtn2.addEventListener("click", function() {
            document.getElementById("popup2").style.display = "block";
            document.querySelector(".popupTitle").innerHTML = "Contact " + tiles.titles[parseInt(this.id)];
            
            var email = document.createElement("a");
            email.href = "mailto:" + tiles.contacts.emails[parseInt(this.id)];
            email.innerHTML = tiles.contacts.emails[parseInt(this.id)];

            var emailText = document.createElement("span");
            emailText.innerHTML = "Email: ";

            var phoneNumber = document.createElement("a");
            phoneNumber.href = "tel:" + tiles.contacts.phoneNumbers[parseInt(this.id)];
            phoneNumber.innerHTML = tiles.contacts.phoneNumbers[parseInt(this.id)];

            var phoneNumberText = document.createElement("span");
            phoneNumberText.innerHTML = "Phone Number: ";

            document.getElementById("popupMail").innerHTML = "";
            document.getElementById("popupMail").appendChild(emailText);
            document.getElementById("popupMail").appendChild(email);

            document.getElementById("popupNumber").innerHTML = "";
            document.getElementById("popupNumber").appendChild(phoneNumberText);
            document.getElementById("popupNumber").appendChild(phoneNumber);
        });

        serviceBtns.appendChild(serviceBtn2);

        service.appendChild(serviceBtns);

        services.appendChild(service);
    }
}

loadTiles();

var popupDiv = document.querySelector('#popup2');
document.body.addEventListener('click', function (event) {
    if (popupDiv.style.display == "block") {
        if (!popupDiv.contains(event.target)) {
            var identity = event.target;
            var btns = document.querySelectorAll(".serviceBtn");
            for(i = 0; i < btns.length; i++) {
                if(!btns[i].contains(identity)) {
                    popupDiv.style.display = "none";

                    break;
                }
            }
        }
    }
});