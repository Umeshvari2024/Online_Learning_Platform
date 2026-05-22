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