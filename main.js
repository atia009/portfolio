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

// objects
const project1 = new Project(`Essential Aesthetics`, `01-project.png`, `https://essentialaesthetics.netlify.app`, `https://github.com/atia009/essential-aesthetics`);
project1.addDesc(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet molestiae at dicta architecto sit enim inventore repellat tempora eaque`);
project1.addTech(`HTML5`);
project1.addTech(`CSS3`);
project1.addTech(`JavaScript`);

projects.push(project1);

const project2 = new Project(`Protagonist`, `01-project.png`, `https://protagonistco.netlify.app`, `https://github.com/atia009/protagonist`);
project2.addDesc(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet molestiae at dicta architecto sit enim inventore repellat tempora eaque`);
project2.addTech(`HTML5`);
project2.addTech(`CSS3`);
project2.addTech(`JavaScript`);
project2.addTech(`Bootstrap`);

projects.push(project2);

const project3 = new Project(`Disflex`, `01-project.png`, `https://disflex.netlify.app`, `https://github.com/atia009/disflex`);
project3.addDesc(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet molestiae at dicta architecto sit enim inventore repellat tempora eaque`);
project3.addTech(`HTML5`);
project3.addTech(`CSS3`);
project3.addTech(`JavaScript`);

projects.push(project3);


// functions
function startWebsiteFunctionality() {
    setHTMLOfElement(document.querySelector(`.cards`), generateProjectsMarkup());
}

function generateProjectsMarkup() {
    let cardNum = 0;
    const markup = projects.map(project => {
        return `<div class="card ${getClassForCard(++cardNum)}">
        <p class="card__number">0${cardNum}</p>
        <a href="${project.demo}" class="card__link" target="__blank"><img src="${project.img}" alt="demo image of ${project.title}" class="card__img"><a>
        <h3 class="card__title">${project.title}</h1>
        <div class="info">
            <p class="info__desc">${project.desc}</p>
            <ul class="tech">
            ${generateTechsMarkup(project.tech)}</ul>
            <div class="external">
                <button type="button" class="external__btn"><a href="${project.demo}" target="__blank" class="external__link">Demo<img src="images/icons/external-link.svg" class="external__icon" alt="external link icon"></a></button><!--
            --><button type="button" class="external__btn"><a href="${project.link}" target="__blank" class="external__link">GitHub<img src="images/icons/external-link.svg" class="external__icon" alt="external link icon"></a></button>
            </div>
        </div>
        </div>
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
    return (number % 2 === 0) ? `--even` : ``;
}

// event listner
window.addEventListener("DOMContentLoaded", startWebsiteFunctionality);