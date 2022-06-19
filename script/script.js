let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-icon");
let popup = document.querySelector(".popup");
let insertName = document.querySelector(".popup__insert-name");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let popupSaveButton = document.querySelector(".popup__save-button");
let cardLikeButton = document.querySelector(".card__like-button");

function editPopup() {
    popup.classList.toggle("popup_opened");
    insertName.value = profileName.textContent;
    insertName.value = profileDescription.textContent; 
}

function savePopup(evt) {
    profileName.textContent = insertName.value;
    profileDescription.textContent = insertName.value;
    popup.classList.toggle("popup_opened");
    evt.preventDefault();
}

for (let i = 0; i < cardLikeButton.length; i++) {
}
cardLikeButton[i].addEventListener("click", callCardLikeButton);
function callCardLikeButton() {
}


editButton.addEventListener("click", editPopup);
closeButton.addEventListener("click", editPopup);
popupSaveButton.addEventListener("click", savePopup); 