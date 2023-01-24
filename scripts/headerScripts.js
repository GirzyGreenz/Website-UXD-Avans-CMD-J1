let pageTitel = "Page titel";

let url = window.location.href.toString();
let strs = url.split("/");
let activePage = strs[4].toString();

console.log(activePage);
document.getElementById("headerTitel").innerHTML = pageTitel;

switch (activePage) {
    case "home.html":
        pageTitel = "Evenementen";
        break;
    case "404-pagina.html":
        pageTitel = "404";
        break;
    case "account.html":
        pageTitel = "Jouw account";
        break;
    case "berichten.html":
        pageTitel = "Berichten";
        break;
    case "buurtgenoten.html":
        pageTitel = "Buurtgenoten";
        break;
    case "individueelEvenement.html":
        pageTitel = "Evenement";
        break;
    case "individueelBericht.html":
        pageTitel = "Bericht sturen";
        break;
    case "map.html":
        pageTitel = "Evenementen kaart";
}

document.getElementById("headerTitel").innerHTML = pageTitel;