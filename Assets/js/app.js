
// navbar right side 1st button select language btn
const languageBtn = document.querySelector("#lang");
const header = document.querySelector("header");

languageBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    header.classList.toggle("language");
    header.classList.remove("login");
});

// navbar sign button 
const signUpBtn = document.querySelector("#signUp");

signUpBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    header.classList.toggle("login");
    header.classList.remove("language");
});


// Display menu btn All link will be inside

function displayMenu() {
    console.log("display menu");
}

