// Change the class with JS

// (1) Bring all of these panels into our JS files
// create a variable called panels
// and there's different ways to select elements
// we can use: getElementById
// we can use: querySelector
// with querySelector we can use anything
// it could be a paragraph, a class or an id

// We want the panels, which have the class .panel
// but the problem here is there is more than 1 panel
// const panels = document.querySelecor('.panel')
// we cant do this, because it will select only the first panel
// We need to use querySelectorAll on that

// With querySelectorAll, instead of selecting the elements directly
// it puts all of the panels into whats called node list,
// which is similar to an array
// if we console.log it, we will see something like:
// NodeList(5)

// We could target a specific panel:
// console.log(panels[0])

// You can also loop through a NodeList
// like with a forEach method,
// which is a high order Array method
// and these methods take functions as an argument
// and what you usually see is an arrow function
// and we can pass in inside the parentheses
// whatever we want to use for each iteration
// these are panels and we pass in panel in singular
// and if we console.log(panel inside the forEach)
// it will show us each panel

// What we want to do inside the forEach
// we want to have an event listener on each of the panel
// so that if we click it, the class changes

// So we take each panel and add EventListener
// and we listen for a click
// and when that click happens
// we're going to run a function

// We want to, when we click on the panel,
// add a class of active

// so if I say, panel.classList
// it gives me a list of the classes

// but we also have methods on this class list object
// like add, where we can specifically add a class

// but the active class stays on all panels
// the cards stay expanded
// its not retracting the other ones

// So before we put a class of active
// lets remove the class of active on all of the other ones

// we're going to have a function
// called remove active classes

// Since there's more than one panel
// we're going to loop through them
// and then remove the active classes

// We do again the forEach inside the function
// and when you have an arrow function, with just one argument
// necause, we can also get the index or the complete array

// panel.forEach((panel, index, arr) => {})

// but since we're only need panel
// we dont even need these parentheses

const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

// So when we click, it removes all the activeClasses from all of them
// and put the active class on the panel that we clicked

