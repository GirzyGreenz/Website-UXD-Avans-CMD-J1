//Popup for message confirmation appen
let openPopupButton = document.querySelector(".popupButtonSend");
let popupItself = document.querySelector("#popupConfirmSend");

function activateConfirmPopup() {
    popupItself.style.display = "flex";
}

openPopupButton.onclick = activateConfirmPopup;

let closePopupButton = document.querySelector(".popupRequestAchtergrond");

function closeConfirmPopup() {
    popupItself.style.display = "none";
}

closePopupButton.onclick = closeConfirmPopup;