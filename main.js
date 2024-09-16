const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const ChangeMood = document.querySelector(".darkmood i");
const DarkOrLightMood = document.querySelector(".theme");
const forMore = document.querySelectorAll(".plus");

// list menu
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
// dark mood
ChangeMood.onclick = function () {
  DarkOrLightMood.classList.toggle("dark");
};

// more details
forMore.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];

    content.classList.toggle("active");

    item.classList.toggle("active-plus");

    if (item.classList.contains("active-plus")) {
      item.innerText = "تفاصيل أقل";
      item.style.display = "block";
    } else {
      item.innerText = "تفاصيل أكثر";
      item.style.transform = "translatY(-18px)";
    }
  });
});



