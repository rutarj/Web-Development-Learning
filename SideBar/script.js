const threeDots = document.querySelector(".three-dots");
const Container = document.querySelector(".container");
const Cut = document.querySelector(".cut");

threeDots.addEventListener("click", () => {
    Container.style.width = '50vh';

});
Cut.addEventListener("click", () => {
    Container.style.width = '0vh';

});


