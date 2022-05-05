// globals
const projects = [];

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
            <div class="card__bg" style="background-image: url(${project.img});">
            <p class="card__number card__number${getClassForCard(++cardNum)}">0${cardNum}</p>
                <div class="info info${getClassForCard(cardNum)}">
                    <h3 class="info__title">${project.title}</h3>
                    <p class="info__desc">${project.desc}</p>
                    <ul class="tech">
                    ${generateTechsMarkup(project.tech)}</ul>
                    <div class="external">
                        <button type="button" class="external__btn"><a href="${project.demo}" target="__blank" class="external__link">Demo<img src="images/icons/external-link.svg" class="external__icon" alt="external link icon"></a></button><!--
                        --><button type="button" class="external__btn"><a href="${project.github}" target="__blank" class="external__link">GitHub<img src="images/icons/external-link.svg" class="external__icon" alt="external link icon"></a></button>
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
    updateRootVariable(`--svg-toggle`, `invert(87%) sepia(9%) saturate(379%) hue-rotate(196deg)
    brightness(82%) contrast(89%)`, `invert(28%) sepia(9%) saturate(1237%) hue-rotate(195deg) brightness(99%) contrast(88%)`);
    updateRootVariable(`--txt-toggle`, `#ffffff`, `#4c4f65`);
}

function addClassToElement(element, className) {
    element.classList.add(className);
}

function removeClassFromElement(element, className) {
    element.classList.remove(className);
}

function updateRootVariable(name, value1, value2) {
    if ((getRootVariableValue(name) === undefined) || (getRootVariableValue(name) === value1)) {
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


// event listner
window.addEventListener("DOMContentLoaded", startWebsiteFunctionality);