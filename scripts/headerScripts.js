let x = "Page titel";

let url = window.location.href.toString();
let strs = url.split("/");
let activePage = strs[4].toString();

console.log(activePage);
document.getElementById("headerTitel").innerHTML = x;

switch (activePage) {
    case "home.html":
        x = "Evenementen";
        break;
    case "404-pagina.html":
        x = "404";
        break;
    case "account.html":
        x = "Jouw account";
        break;
    case "berichten.html":
        x = "Berichten";
        break;
    case "buurtgenoten.html":
        x = "Buurtgenoten";
        break;
    case "individueelEvenement.html":
        x = "Evenement";
        break;
    case "notificaties.html":
        x = "notificaties";
        break;
    case "map.html":
        x = "Evenementen kaart";
}

document.getElementById("headerTitel").innerHTML = x;