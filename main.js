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

const project2 = new Project(`Protagonist`, `01-project.png`, `https://protagonistco.netlify.app`, `https://github.com/atia009/protagonist`);
project2.addDesc(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet molestiae at dicta architecto sit enim inventore repellat tempora eaque`);
project2.addTech(`HTML5`);
project2.addTech(`CSS3`);
project2.addTech(`JavaScript`);
project2.addTech(`Bootstrap`);

const project3 = new Project(`Disflex`, `01-project.png`, `https://disflex.netlify.app`, `https://github.com/atia009/disflex`);
project3.addDesc(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet molestiae at dicta architecto sit enim inventore repellat tempora eaque`);
project3.addTech(`HTML5`);
project3.addTech(`CSS3`);
project3.addTech(`JavaScript`);
