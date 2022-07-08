const editButton = document.querySelector(".editbutton");
const closePopupIcon = document.querySelectorAll(".popup__close-icon");
const addButton = document.querySelector(".profile__add-button");
const saveButtonAddCard = document.querySelector(".popup__save-button_card");
const popupSaveButton = document.querySelector(".popup__save-button");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const cardTemplate = document.querySelector(".card__template").content;
const elements = document.querySelector(".elements");

const insertTitle = document.querySelector(".popup__insert-title");
const insertLink = document.querySelector(".popup__insert-link");
const insertName = document.querySelector(".popup__insert-name");
const insertAbout = document.querySelector(".popup__insert-about");

const popupEditProfile = document.querySelector(".popup-editprofile");
const popupAddCard = document.querySelector(".popup-addcard");
const popupImage = document.querySelector(".popup-image");



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
  callPopupImage();
  callLikeButton();
  deleteCardButton();
  }


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


function callPopupAddCard() {
    popupAddCard.classList.toggle("popup_opened");
}
   
addButton.addEventListener("click", callPopupAddCard);


function callPopupImage() {
  const images = document.querySelectorAll(".card__image");
  images.forEach(function (item) {
    item.addEventListener("click", createPopupImage);
  });
}

function createPopupImage(evt) {
  const imageView = document.querySelector(".popup__image-view");
  imageView.src = evt.target.src;
  imageView.alt = evt.target.alt;
  const imageTitle = document.querySelector(".popup__caption");
  imageTitle.textContent = evt.target.alt;
  popupImage.classList.add("popup_opened");
}


closePopupIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    closePopup(item.closest(".popup"));
  });
});

function closePopup(item) {
  item.classList.remove("popup_opened");
}


function addCard() {
  const newCard = {
    name: insertTitle.value,
    link: insertLink.value,
  };
  
  
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__text").textContent = newCard.name;
  cardElement.querySelector(".card__image").src = newCard.link;
  cardElement.querySelector(".card__image").alt = newCard.name;
  elements.prepend(cardElement);
  callPopupImage();
  deleteCardButton();
}

function saveCard() {
    addCard();
    popupAddCard.classList.remove("popup_opened");
}

saveButtonAddCard.addEventListener("click", saveCard);


function callLikeButton() {
    const likeButton = document.querySelectorAll(".card__like-button");
    likeButton.forEach(function (item) {
        item.addEventListener("click", function (evt) {
            item.classList.toggle("card__like-button_active");
        });
    });
}


function deleteCardButton() {
    const deleteButton = document.querySelectorAll(".card__trash");
    deleteButton.forEach(function (item) {
        item.addEventListener("click", function () {
            item.closest(".card").remove();
        });
    });
}

  callInitialCards();




