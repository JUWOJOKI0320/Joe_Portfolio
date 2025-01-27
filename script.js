const menu = document.getElementById("menu");
const skills = document.getElementById("Skills-container");
const home = document.getElementById("Home-container-container");
const linkContainer = document.getElementById("link-container");
const sideMenu = document.getElementById("sidemenu");
const body = document.querySelector("body");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const ojmh1 = document.querySelector(".OJM h1");
const logo = document.getElementById("logo")

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
    dark.style.transform = "";
});

dark.addEventListener("click", () =>{
    body.style.backgroundColor = "#1D1919";
    light.style.transform = "scale(1)";
    dark.style.transform = "scale(0)";
    h1.style.color = "white";
    ojmh1.style.color = "white";
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


