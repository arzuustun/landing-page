const sections = document.querySelectorAll("section");

let counter=0;
function createSections(){
counter++;
let section =`<section id="section${counter}" data-nav="Section ${counter}" class="your-active-class">
<div class="landing__container">
  <h2>Section ${counter}</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`;
document.querySelector('main').insertAdjacentHTML('beforeend',section);
}
for (let i=1; i<5; i++){
    createSections();
}

createNavBarItem();

const addSectionBtn=document.getElementById('btn');
addSectionBtn.addEventListener('click',function(){
    createSections();
    document.getElementById("navbar__list").innerHTML="";
    createNavBarItem();
});

function createNavBarItem(){
    document.querySelectorAll("section").forEach(function(item){ 
        let sectionTitle= item.getAttribute('data-nav');
        let sectionId= item.getAttribute('id');
        let tag=`<li><a href=#${sectionId} data-nav="${sectionId}"class="menu__link"> ${sectionTitle}</a></li>`
        document.getElementById("navbar__list").insertAdjacentHTML('beforeend',tag);
    });
 }
 
function toggleSection(){
    sections.forEach(function(item){
        let sectionPositions= item.getBoundingClientRect();
          if(sectionPositions.top >= -400 && sectionPositions.top <150){

           if (!item.classList.contains('your-active-class')){
               item.classList.add('your-active-class');
            }
        }
        else{
           item.classList.remove('your-active-class');
        }

    });
}
document.addEventListener('scroll', toggleSection);


/**
 * 
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


