//change navbar items to active nav-bar items

let urlFooter = window.location.href.toString();
let strsFooter = urlFooter.split("/");
let activePageFooter = strsFooter[4].toString();

console.log(activePageFooter);

if (activePageFooter == "map.html") {
    document.getElementById("navImageKaart").src = "../media/icons/map-icon-grey.png";
    document.getElementById("navTextKaart").style.color = "#1B1D1F";
} else {
    document.getElementById("navImageKaart").src = "../media/icons/map-icon-white.png";
    document.getElementById("navTextKaart").style.color = "#FFFFFF";
};


if (activePageFooter == "home.html" || activePageFooter == "individueelEvenement") {
    document.getElementById("navImageEvenement").src = "../media/icons/event-grey.png";
    document.getElementById("navTextEvenement").style.color = "#1B1D1F";
} else {
    document.getElementById("navImageEvenement").src = "../media/icons/event-white.png";
    document.getElementById("navTextEvenement").style.color = "#FFFFFF";
};

if (activePageFooter == "buurtgenoten.html") {
    document.getElementById("navImageBuurt").src = "../media/icons/contact-icon-grey.png";
    document.getElementById("navTextBuurt").style.color = "#1B1D1F";
} else {
    document.getElementById("navImageBuurt").src = "../media/icons/contact-icon-white.png";
    document.getElementById("navTextBuurt").style.color = "#FFFFFF";
};

if (activePageFooter == "account.html" || activePageFooter == "notificaties.html") {
    document.getElementById("navImageProfiel").src = "../media/icons/account-icon-grey.png";
    document.getElementById("navTextProfiel").style.color = "#1B1D1F";
} else {
    document.getElementById("navImageProfiel").src = "../media/icons/account-icon-white.png";
    document.getElementById("navTextProfiel").style.color = "#FFFFFF";
};

if (activePageFooter == "berichten.html") {
    document.getElementById("navImageBericht").src = "../media/icons/text-icon-grey.png";
    document.getElementById("navTextBericht").style.color = "#1B1D1F";
} else {
    document.getElementById("navImageBericht").src = "../media/icons/text-icon-white.png";
    document.getElementById("navTextBericht").style.color = "#FFFFFF";
};