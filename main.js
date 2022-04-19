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
function generateProjectsMarkup() {
    let cardNum = 0;
    const markup = projects.map(project => {
        return `<div class="card">
        <h3 class="card__title">${project.title}</h1>
        <p class="card__number">0${++cardNum}</p>
        <img src="${project.img}" alt="demo image of ${project.title}" class="card__img">
        <p class="card__desc">${project.desc}</p>
        <ul class="techs">
        ${generateTechsMarkup(project.tech)}</ul>
        <button type="button" class="card__btn"><a href="${project.demo}" class="card__link">Demo<img src="images/icons/external-link.svg" class="card__icon" alt="external link icon"></a></button>
        <button type="button" class="card__btn"><a href="${project.link}" class="card__link">GitHub<img src="images/icons/external-link.svg" class="card__icon" alt="external link icon"></a></button>
    </div>
    `
    })
    return markup.join("");
}

function generateTechsMarkup(techList) {
    const markup = techList.map(tech => {
        return `<li class="tech">${tech}</li>
        `
    })
    return markup.join("");
}

console.log(generateProjectsMarkup());