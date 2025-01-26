const menu = document.getElementById("menu");
const skills = document.getElementById("Skills-container");
const aboutme = document.getElementById("Aboutme-container-container");
const linkContainer = document.getElementById("link-container");
const sideMenu = document.getElementById("sidemenu");
const body = document.querySelector("body");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const ojmh1 = document.querySelector(".OJM h1");

const h1 = document.querySelector("h1");

menu.addEventListener("click", () => {
    if(linkContainer.style.transform != "translate(88%)"){
        linkContainer.style.transform = "translate(88%)";
    }
    else{
        linkContainer.style.transform = "translate(0%)";
        setTimeout(() => {
            linkContainer.style.transform = "";
    },500)
    }


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
    // Calculate the translateY value based on the scroll position
    const translateValue = -window.scrollY * 1; // Adjust the multiplier for speed

    // Apply the transformation
    skills.style.transform = `translateY(${translateValue}px)`;

    const scaleValue = 1 + window.scrollY * -0.0002 // Adjust the multiplier for scaling speed

    // Apply the scale transformation to aboutme
    aboutme.style.transform = `scale(${scaleValue})`;

    const opacityValue = 1 + window.scrollY * -0.003;

    aboutme.style.opacity = `${opacityValue}`;
    
    if (window.scrollY >= 330 && window.innerWidth <= 800){
    sideMenu.style.opacity = "1";
    sideMenu.style.width = "18px";}
    else{
    sideMenu.style.opacity = "0";
    sideMenu.style.width = "0px";
    }   
});


