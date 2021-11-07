const menuToggleButton = document.querySelector(".menutogglebutton");
const mainMenu = document.querySelector(".mainmenu");

const changeButtonIcon = () => {
  let imgSrc = "";
  if (menuToggleButton.ariaExpanded === "true") {
    imgSrc = "assets/images/icon-close.svg";
  } else {
    imgSrc = "assets/images/icon-hamburger.svg";
  }
  menuToggleButton.firstChild.setAttribute("src", imgSrc);
};

menuToggleButton.addEventListener("click", () => {
  if (menuToggleButton.ariaExpanded === "true") {
    mainMenu.classList.add("mainmenu--reduce");
  } else {
    mainMenu.classList.remove("mainmenu--hide");
    setTimeout(() => {
      mainMenu.classList.remove("mainmenu--reduce");
    }, 100);
  }
});

mainMenu.addEventListener("transitionend", () => {
  if (menuToggleButton.ariaExpanded === "true") {
    mainMenu.classList.add("mainmenu--hide");
    menuToggleButton.ariaExpanded = "false";
  } else {
    menuToggleButton.ariaExpanded = "true";
  }

  changeButtonIcon();
});
