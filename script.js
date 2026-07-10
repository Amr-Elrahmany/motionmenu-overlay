const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".overlay a");

menuBtn.addEventListener("click", () => {

    overlay.classList.toggle("active");
    menuBtn.classList.toggle("active");

});

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        overlay.classList.remove("active");
        menuBtn.classList.remove("active");

    });

});