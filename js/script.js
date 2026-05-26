// DARK MODE TOGGLE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    // CHECK CURRENT THEME

    const currentTheme = document.body.getAttribute("data-theme");

    if(currentTheme === "dark"){

        // REMOVE DARK MODE

        document.body.removeAttribute("data-theme");

        themeToggle.innerHTML = "🌙 Dark";

    }else{

        // ENABLE DARK MODE

        document.body.setAttribute("data-theme", "dark");

        themeToggle.innerHTML = "☀️ Light";

    }

});


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");

const navContainer = document.getElementById("navContainer");

menuToggle.addEventListener("click", () => {

    navContainer.classList.toggle("show");

});
// ENROLL POPUP

document.addEventListener("DOMContentLoaded", () => {

    const openFormBtn = document.getElementById("openFormBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");
    const popupForm = document.getElementById("popupForm");
    const enrollForm = document.getElementById("enrollForm");

    if(openFormBtn){

        openFormBtn.addEventListener("click", () => {

            popupForm.style.display = "flex";

        });

    }

    if(closeFormBtn){

        closeFormBtn.addEventListener("click", () => {

            popupForm.style.display = "none";

        });

    }

    if(enrollForm){

        enrollForm.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Enrollment Successful ✅");

            popupForm.style.display = "none";

            enrollForm.reset();

        });

    }

});