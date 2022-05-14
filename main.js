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
                    <div class="external">
                        <button type="button" class="external__btn">
                            <a href="${project.demo}" target="__blank" class="external__link">
                                <svg class="external-icon" xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"/>
                                </svg>Demo
                            </a></button><!--
                        --><button type="button" class="external__btn">
                                <a href="${project.github}" target="__blank" class="external__link">
                                    <svg class="external-icon" xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 448 512">
                                        <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"/>
                                    </svg>GitHub
                                </a>
                            </button>
                    </div>
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
    updateClassVisibility(mobile, `--hidden`);
    updateClassVisibility(body, `--overflow`);
}

function updateClassVisibility(element, classToUpdate) {
    if (element.classList.contains(classToUpdate)) {
        removeClassFromElement(element, classToUpdate);
    } else {
        addClassToElement(element, classToUpdate);
    }
}

function startColorModeFunctionality() {
    const color = document.querySelector(`.color-mode`);
    color.addEventListener('click', updateColorMode);
}

function updateColorMode() {
    updateRootVariable(`--primary-toggle`, `#1c1d25`, `#ebebeb`);
    updateRootVariable(`--secondary-toggle`, `#b0b2c3`, `#4c4f65`);
    updateRootVariable(`--hover-toggle`, `#ffffff`, `#1c1d25`);
    updateRootVariable(`--txt-toggle`, `#ffffff`, `#4c4f65`);
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



// asynchrounous calls
window.addEventListener("DOMContentLoaded", startWebsiteFunctionality);
setTimeout(startTypedEffect, 1000);