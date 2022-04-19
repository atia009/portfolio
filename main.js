// constructor
function Project(title, img, demo, github) {
    this.title = title;
    this.img = img;
    this.demo = demo;
    this.github = github
}

// prototypes 
Project.prototype.addDesc = function(desc) {
    this.desc = desc;
}

//// add array to Project object constructor for the technologies used


// objects
const project1 = new Project(`Essential Aesthetics`, `01-project.png`, `https://essentialaesthetics.netlify.app`, `https://github.com/atia009/essential-aesthetics`);
const project2 = new Project(`Protagonist`, `01-project.png`, `https://protagonistco.netlify.app`, `https://github.com/atia009/protagonist`);
const project3 = new Project(`Disflex`, `01-project.png`, `https://disflex.netlify.app`, `https://github.com/atia009/disflex`);


// get project property
// add project 
// functions
console.log(project1);
project1.addDesc("hello");
console.log(project1);