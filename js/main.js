var link = document.querySelector(".search-hotels-button");
var popup = document.querySelector(".modal-search");
      
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
});