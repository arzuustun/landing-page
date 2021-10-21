const sections = document.querySelectorAll("section");
const menu =document.getElementById("navbar__list");

function createNavBarItem(){
    sections.forEach(function(item){
        let sectionTitle= item.getAttribute('data-nav');
        let sectionId= item.getAttribute('id');
        const li = document.createElement('li');
        const a=document.createElement('a');
        a.setAttribute('href','#' +sectionId);
        a.className='menu__link';
        const text =document.createTextNode(sectionTitle);
        a.appendChild(text);
        li.appendChild(a);
        menu.appendChild(li);
    });
 }
 
function toggleSection(){
    sections.forEach(function(item){
        let sectionPositions= item.getBoundingClientRect();
        if(sectionPositions.top >= 0 && sectionPositions.y <1){
           if (!item.classList.contains('your-active-class')){
               item.classList.add('your-active-class');
            }
        }
        else{
            item.removeAttribute('class');
        }
    });
}
createNavBarItem();
document.addEventListener('scroll', toggleSection);


/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


