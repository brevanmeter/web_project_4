const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopupIcon = document.querySelectorAll(".popup__close-icon");
const popupEditProfile = document.querySelector(".popup__edit-profile");
const insertName = document.querySelector(".popup__insert-name");
const insertAbout = document.querySelector(".popup__insert-about");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const saveButtonAddCard = document.querySelector(".popup__save-button-addcard");
const cardTemplate = document.querySelector(".card__template").content;
const elements = document.querySelector(".elements");
const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup__add-card");
const insertTitle = document.querySelector(".popup__insert-title");
const insertLink = document.querySelector(".popup__insert-link");
const popupImage = document.querySelector(".popup__image");
const popupSaveButton = document.querySelector(".popup__save-button");
const addCardTitle = document.querySelector(".popup__title");
const addCardLink = document.querySelector(".popup__link");

//1. GERA OS 6 CARDS INICIAIS

const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
      name: "Montanhas Carecas",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
      name: "Parque Nacional da Vanoise ",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
  ];
  
  
  function callInitialCards() {
    elements.innerHTML = "";
    initialCards.map(function (item) {
      const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
      cardElement.querySelector(".card__text").textContent = item.name;
      cardElement.querySelector(".card__image").src = item.link;
      cardElement.querySelector(".card__image").alt = item.name;
      return elements.append(cardElement);
    });
    callLikeButton();
    callPopupImage();
    deleteCardButton();
  }

//2. ABERTURA DE POPUPS 

//2.1 POPUP EDIT PROFILE / SAVE POPUP EDIT PROFILE INFO

function editPopup() {
    popupEditProfile.classList.toggle("popup_opened");
    insertName.value = profileName.textContent;
    insertAbout.value = profileDescription.textContent;
}

function savePopup(evt) {
    profileName.textContent = insertName.value;
    profileDescription.textContent = insertAbout.value;
    popupEditProfile.classList.toggle("popup_opened");
    evt.preventDefault();
}

editButton.addEventListener("click", editPopup);
popupSaveButton.addEventListener("click", savePopup);

//2.2 POPUP ADD CARD / SAVE POPUP ADD CARD INFO

function callPopupAddCard() {
    popupAddCard.classList.toggle("popup_opened");
}
   
addButton.addEventListener("click", callPopupAddCard);


//2.3 POPUP IMAGE

function callPopupImage(evt) {
        popupImage.classList.toggle("popup_opened");
        popupImage.src = evt.target.src;
    }
    
    elements.addEventListener("click", callPopupImage); 

function createPopupImage(evt) {
    const imageView = document.querySelector(".popup__image-view");
    imageView.src = evt.target.src;
    imageView.alt = evt.target.alt;
    const imageTitle = document.querySelector(".popup__caption");
    imageTitle.textContent = evt.target.alt;
    popupImage.classList.toggle("popup_opened");
}  

// SALVA DADOS DO ADDCARDS E INCLUI NA LISTA

function addCard() {
  const newCard = {
    name: insertTitle.value,
    link: insertLink.value,
  };
  initialCards.unshift(newCard);

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__text").textContent = newCard.name;
  cardElement.querySelector(".card__image").src = newCard.name;
  cardElement.querySelector(".card__image").alt = newCard.link;
  elements.prepend(cardElement);
  callPopupImage();
  callInitialCards();
  clearAddCardPopup();
}

function clearAddCardPopup() {
  popupAddCard.classList.remove("popup_opened");
  insertTitle.value = "";
  insertLink.value = "";
  event.preventDefault();
}

//3 FECHA OS POPUPS

closePopupIcon.forEach(function (item) {
    item.addEventListener("click", function () {
      closePopup(item.closest(".popup"));
    });
  });
  
  function closePopup(item) {
    item.classList.remove("popup_opened");
  }

  callInitialCards();


