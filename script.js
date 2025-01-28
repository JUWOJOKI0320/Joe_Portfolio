const menu = document.getElementById("menu");
const skills = document.getElementById("Skills-container");
const home = document.getElementById("Home-container-container");
const linkContainer = document.getElementById("link-container");
const sideMenu = document.getElementById("sidemenu");
const body = document.querySelector("body");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const ojmh1 = document.querySelector(".OJM h1");
<<<<<<< HEAD
const logo = document.getElementById("logo")
=======
const scrolldownp = document.querySelector(".ScrollDown p");
const scrolldowni = document.querySelectorAll(".bx.bxs-chevrons-down");
>>>>>>> f76b79e112323da7a34d1176daca929178172ee8

const h1 = document.querySelector("h1");

/*menu.addEventListener("click", () => {
    if(linkContainer.style.transform != "translate(88%)"){
        linkContainer.style.transform = "translate(88%)";
    }
    else{
        linkContainer.style.transform = "translate(0%)";
        setTimeout(() => {
            linkContainer.style.transform = "";
    },500)
    }


});*/

menu.addEventListener("click", () => {
    linkContainer.classList.toggle("active");
});


light.addEventListener("click", () =>{
    body.style.backgroundColor = "#ece6e6";
    light.style.transform = "scale(0)";
    dark.style.transform = "scale(1)";
    h1.style.color = "#1D1919";
    ojmh1.style.color = "#1D1919";
    scrolldownp.style.color =  "#1D1919";
    scrolldowni.forEach((element) => {
        element.style.color = "#1D1919";
    });
    dark.style.transform = "";
});

dark.addEventListener("click", () =>{
    body.style.backgroundColor = "#1D1919";
    light.style.transform = "scale(1)";
    dark.style.transform = "scale(0)";
    h1.style.color = "#ece6e6";
    ojmh1.style.color = "#ece6e6";
    scrolldownp.style.color =  "#ece6e6";
    scrolldowni.forEach((element) => {
        element.style.color = "#E9B952";
    });
    light.style.transform = "";
});

window.addEventListener("scroll", () =>{    

    console.log(Math.floor(window.scrollY))
    // Translate the skills section upward as you scroll down
    const translateValue = Math.max(-25, 20 - (scrollY / window.innerHeight) * 100); // Calculate percentage
    skills.style.transform = `translateY(${translateValue}%)`;

    // Optional: Update the Home section's opacity or other effects
    const opacityValue = Math.max(0, 1 - scrollY * 0.002); // Gradual fade-out
    home.style.opacity = opacityValue;

    home.style.opacity = `${opacityValue}`;
    logo.style.opacity = `${opacityValue}`;
    
    if (window.scrollY >= 330 && window.innerWidth <= 800){
    sideMenu.style.opacity = "1";
    sideMenu.style.width = "18px";}
    else{
    sideMenu.style.opacity = "0";
    sideMenu.style.width = "0px";
    }

});


