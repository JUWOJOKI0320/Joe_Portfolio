const menu = document.getElementById("menu");
const skills = document.getElementById("Skills-container");
const aboutme = document.getElementById("Aboutme-container-container");
const linkContainer = document.getElementById("link-container");
const sideMenu = document.getElementById("sidemenu");


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

window.addEventListener("scroll", () =>{    

    console.log(window.scrollY)
    // Calculate the translateY value based on the scroll position
    const translateValue = -window.scrollY * 1; // Adjust the multiplier for speed

    // Apply the transformation
    skills.style.transform = `translateY(${translateValue}px)`;

    const scaleValue = 1 + window.scrollY * -0.0002 // Adjust the multiplier for scaling speed

    // Apply the scale transformation to aboutme
    aboutme.style.transform = `scale(${scaleValue})`;

    const opacityValue = 1 + window.scrollY * -0.003

    aboutme.style.opacity = `${opacityValue}`;
    
    sideMenu.style.opacity =`${-opacityValue + 0.9}`;
    sideMenu.style.width = "18px"

    setTimeout(() => {
        sideMenu.style.animation = ""; // Reset animation
        
    }, 600); // Duration of the bounce animation
});


