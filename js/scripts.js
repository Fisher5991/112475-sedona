var link = document.querySelector(".search-hotels-button");
var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");
var arrival_date = popup.querySelector("[name=arrival-date]");
var departure_date = popup.querySelector("[name=departure-date]");
var number_adults = popup.querySelector("[name=number-adults]");
var number_children = popup.querySelector("[name=number-children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!arrival_date.value || !departure_date.value || !number_adults.value || !number_children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-search")) {
      popup.classList.add("modal-close");
      popup.classList.remove("modal-error");
    }
  }
});