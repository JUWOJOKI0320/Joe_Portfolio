const menu = document.getElementById("menu");

menu.onclick = () => {
    const linkContainer = document.getElementById("link-container");
    if(linkContainer.style.transform != "translate(90%)"){
        linkContainer.style.transform = "translate(90%)";
    }
    else{
        linkContainer.style.transform = "translate(0%)";
    }
};

/*const MMenu = document.querySelector(".menu");
        const linkContainer = document.querySelector(".link-container");

        // Add hover event to the .menu
        MMenu.addEventListener("mouseenter", () => {
            // Change the styles of link-container when hovering over menu
            linkContainer.style.cursor = "pointer";
            linkContainer.style.transform = "-25px";
        });

        // Reset styles when the hover ends
        MMenu.addEventListener("mouseleave", () => {
            linkContainer.style.cursor = "default";
            linkContainer.style.marginRight = "0";
        });*/