// globals
const projects = [];
let typedCount = 0;

// constructor
function Project(title, img, demo, github) {
    this.title = title;
    this.img = img;
    this.demo = demo;
    this.github = github
    this.tech = [];
}

// prototypes 
Project.prototype = {
    addDesc: function(desc) {
        this.desc = desc;
    },
    addTech: function(tech) {
        this.tech.push(tech);
    }
}

// images are 1872 x 960
// objects
const project1 = new Project(`Essential Aesthetics`, `images/01-project.png`, `https://essentialaesthetics.netlify.app`, `https://github.com/atia009/essential-aesthetics`);
project1.addDesc(`Dermatology website with search and sort options for product navigation.`);
project1.addTech(`HTML5`);
project1.addTech(`CSS3`);
project1.addTech(`JavaScript`);

projects.push(project1);

const project2 = new Project(`Disflex`, `images/02-project.png`, `https://disflex.netlify.app`, `https://github.com/atia009/disflex`);
project2.addDesc(`Flexbox simulator that includes ui controls and css snippets. `);
project2.addTech(`HTML5`);
project2.addTech(`CSS3`);
project2.addTech(`JavaScript`);

projects.push(project2);

const project3 = new Project(`Protagonist`, `images/03-project.png`, `https://protagonistco.netlify.app`, `https://github.com/atia009/protagonist`);
project3.addDesc(`E-commerce webpage showcasing responsive layouts with BootStrap.`);
project3.addTech(`HTML5`);
project3.addTech(`CSS3`);
project3.addTech(`JavaScript`);
project3.addTech(`Bootstrap`);

projects.push(project3);

// functions
function startWebsiteFunctionality() {
    setHTMLOfElement(document.querySelector(`.cards`), generateProjectsMarkup());
    startNavFunctionality();
    startColorModeFunctionality();
    startSmoothScroll();
}

function generateProjectsMarkup() {
    let cardNum = 0;
    const markup = projects.map(project => {
        return `<li class="card">
            <div class="card__bg card__bg${getClassForCard(++cardNum)}" style="background-image: url(${project.img});">
            <p class="card__number card__number${getClassForCard(cardNum)}">0${cardNum}</p>
                <div class="info info${getClassForCard(cardNum)}">
                    <div class="info-container"><h3 class="info__title">${project.title}</h3></div>
                    <p class="info__desc">${project.desc}</p>
                    <ul class="tech">
                    ${generateTechsMarkup(project.tech)}</ul>
                    <ul class="external">
                        <a href="${project.github}" target="__blank" class="external__link" aria-label="GitHub" title="GitHub">
                        <svg class="external__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                        </a>
                        <a href="${project.demo}" target="__blank" class="external__link" aria-label="Demo" title="Demo">
                        <svg class="external__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19M8.7 8L10.8 10.1L7 14L9.8 16.8L13.6 12.9L15.7 15V8H8.7Z" />
                        </svg>
                        </a>
                    </ul>
                </div>
            </div>
        </li>
    `
    })
    return markup.join("");
}


function generateTechsMarkup(techList) {
    const markup = techList.map(tech => {
        return `<li class="tech__item">${tech}</li>
        `
    })
    return markup.join("");
}

function setHTMLOfElement(element, markup) {
    element.innerHTML = markup;
}

function getClassForCard(number) {
    return (number % 2 === 0) ? `--even` : `--odd`;
}

function startNavFunctionality() {
    const navEnter = document.querySelector(`.mobile-toggle`);
    const navExit = document.querySelector(`.nav-exit`);
    const links = document.querySelectorAll(`.mobile-links__item`);
    
    navEnter.addEventListener(`click`, updateMobileNavVisibility);
    navExit.addEventListener(`click`, updateMobileNavVisibility);
    links.forEach(link => link.addEventListener(`click`, updateMobileNavVisibility));
}

function updateMobileNavVisibility() {
    const mobile = document.querySelector(`.mobile-nav`);
    const body = document.querySelector(`body`);
    const links = document.querySelector(`.mobile-links`);
    const social = document.querySelector(`.mobile-social`);
    const exit = document.querySelector(`.nav-exit`);

    updateToggleClass(mobile, `--animation-ease-right`, `--animation-ease-left`);
    updateToggleClass(links, `--animation-ease-top`, `--animation-ease-bottom`);
    updateToggleClass(social, `--animation-ease-top`, `--animation-ease-bottom`);
    updateToggleClass(exit, `--animation-ease-top`, `--animation-ease-bottom`);

    setTimeout(() => {updateClassVisibility(mobile, `--hidden`)}, 300);
    updateClassVisibility(body, `--overflow`);
}

function updateClassVisibility(element, classToUpdate) {
    if (element.classList.contains(classToUpdate)) {
        removeClassFromElement(element, classToUpdate);
    } else {
        addClassToElement(element, classToUpdate);
    }
}

function updateToggleClass(element, classEnter, classExit) {
    if (element.classList.contains(classEnter)) {
        removeClassFromElement(element, classEnter);
        addClassToElement(element,classExit);   
    } else {
        removeClassFromElement(element, classExit);
        addClassToElement(element,classEnter);
    }
}

function startColorModeFunctionality() {
    const color = document.querySelector(`.color-mode`);
    color.addEventListener('click', updateColorMode);
}

function updateColorMode() {
    updateColorLabel();
    updateThemeColor();
    updateRootVariable(`--primary-toggle`, `#1c1d25`, `#ebebeb`);
    updateRootVariable(`--secondary-toggle`, `#b0b2c3`, `#4c4f65`);
    updateRootVariable(`--hover-toggle`, `#ffffff`, `#1c1d25`);
    updateRootVariable(`--txt-toggle`, `#ffffff`, `#4c4f65`);
    updateRootVariable(`--about-toggle`, `#235aa6`, `#7cadf2`);
}

function updateColorLabel() {
    updateAttributeValue(`aria-label`, `Light Mode`, `Dark Mode`);
    updateAttributeValue(`title`, `Light Mode`, `Dark Mode`);
}

function updateAttributeValue(name, value1, value2) {
    const color = document.querySelector(`.color-mode`);
    if (color.getAttribute(name) === `Light Mode`) {
        color.setAttribute(name, `Dark Mode`);
    } else {
        color.setAttribute(name, `Light Mode`);
    }
}

function updateThemeColor() {
    const themeColor = document.querySelector(`meta[name=theme-color]`);
    if (themeColor.getAttribute(`content`) === `#1c1d25`) {
        themeColor.setAttribute(`content`, `#ebebeb`);
    } else {
        themeColor.setAttribute(`content`, `#1c1d25`);
    }
}

function addClassToElement(element, className) {
    element.classList.add(className);
}

function removeClassFromElement(element, className) {
    element.classList.remove(className);
}

function updateRootVariable(name, value1, value2) {
    if ((getRootVariableValue(name) === ``) || (getRootVariableValue(name) === value1)) {
        setRootVariableValue(name, value2);
    } else {
        setRootVariableValue(name, value1);
    }
}

function getRootVariableValue(name) {
    return document.documentElement.style.getPropertyValue(name);
}

function setRootVariableValue(name, value) {
    document.documentElement.style.setProperty(name, value);
}

function startTypedEffect() {
    const subtitle = `Front-end Developer`;
    let lettersToType = subtitle.slice(0, typedCount);
    const intro = document.querySelector(`.intro__subtitle`);
    intro.textContent = lettersToType;
    if (lettersToType.length != intro.length) {
        setTimeout(() => {
            typedCount++;
            startTypedEffect();
        }, 100);
    } 
}

function startSmoothScroll() {
    const internalLinks = document.querySelectorAll(`.--smooth-scroll`);
    internalLinks.forEach(link => link.addEventListener(`click`, updatePageScroll));
}

function updatePageScroll(event) {
    const targetLink = event.currentTarget.getAttribute(`href`);
    event.preventDefault();
    window.scrollTo({
        top: document.querySelector(targetLink).offsetTop, 
        behavior: `smooth`
        });
}


// asynchrounous calls
window.addEventListener("DOMContentLoaded", startWebsiteFunctionality);
setTimeout(startTypedEffect, 1000);