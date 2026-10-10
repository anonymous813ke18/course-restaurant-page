import "./styles.css";
import { renderHomePage } from "../js/home-page.js";

function contentController () {
    const header = document.querySelector("header");
    const content = document.querySelector("#content");
    const footer = document.querySelector("footer");

    function createHeader () {
        const nav = document.createElement("nav");
        const logo = createLogo();

        const homeBtn = document.createElement("button");
        homeBtn.classList.add("nav-btn", "home-btn", "selected");
        homeBtn.textContent = "Home";

        const menuBtn = document.createElement("button");
        menuBtn.classList.add("nav-btn", "menu-btn");
        menuBtn.textContent = "Menu";

        const aboutBtn = document.createElement("button");
        aboutBtn.classList.add("nav-btn", "about-btn");
        aboutBtn.textContent = "About";

        nav.appendChild(logo);
        nav.appendChild(homeBtn);
        nav.appendChild(menuBtn);
        nav.appendChild(aboutBtn);

        header.appendChild(nav);
    }

    function createLogo () {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "75");
        svg.setAttribute("height", "60");
        svg.setAttribute("viewBox", "0 0 100 80");

        const headerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        headerText.setAttribute("x", "10");
        headerText.setAttribute("y", "55");
        headerText.setAttribute("font-family", "'Noto Sans Mono'");
        headerText.setAttribute("font-size", "70");
        headerText.setAttribute("font-weight", "bold");
        headerText.setAttribute("letter-spacing", "9");
        headerText.textContent = "HK";

        const footerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        footerText.setAttribute("x", "10");
        footerText.setAttribute("y", "75");
        footerText.setAttribute("font-family", "'Noto Sans Mono'");
        footerText.setAttribute("font-size", "14");
        footerText.setAttribute("letter-spacing", "0.8");
        footerText.textContent = "RESTAURANT";

        svg.appendChild(headerText);
        svg.appendChild(footerText);

        return svg;
    }

    function createFooter () {
        const para = document.createElement("p");
        para.textContent = "© Example Copyright by Hammad Khan";
        footer.appendChild(para);
    }

    function addEventListeners () {
        const nav = document.querySelector("nav");

        nav.addEventListener('click', e => {
            if (!e.target.classList.contains("nav-btn"))
                return;

            if (e.target.classList.contains("home-btn")) {
                // Code to render home-page
                content.replaceChildren();
                renderHomePage();
            }
        })
    }

    createHeader();
    addEventListeners();
    // renderHomePage();
    createFooter();
}

contentController();