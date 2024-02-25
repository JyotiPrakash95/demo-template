const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener(
  "click",
  (clickfun = () => {
    document.getElementById("menu").classList.toggle("menu-active");
    console.log("clicked");
  })
);

window.addEventListener(
  "scroll",
  (fixHeader = () => {
    const fixHead = document.querySelector("#header");
    if (window.scrollY >= 100) {
      fixHead.classList.add("fixed-header");
    } else {
      fixHead.classList.remove("fixed-header");
    }
  })
);
// form
document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("focus", function () {
    this.classList.add("active");
  });

  input.addEventListener("blur", function () {
    this.classList.remove("active");
    this.style.backgroundColor = "inherit";
  });
});
// gallery
        function openPopup(imageSrc) {
          const popupImg = document.getElementById("popup-img");
          popupImg.src = imageSrc;
          document.getElementById("popup").style.display = "flex";
        }

        function closePopup() {
          document.getElementById("popup").style.display = "none";
        }
