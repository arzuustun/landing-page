//creates new section on main page
function createSections() {
    let currentSectionNumber = document.getElementsByTagName('section').length;
    let newSectionNumber =currentSectionNumber+1;
    let section = `<section id="section${newSectionNumber}" data-nav="Section ${newSectionNumber}" >
    <div class="landing__container">
    <h2>Section ${newSectionNumber}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    document.querySelector('main').insertAdjacentHTML('beforeend', section);
}

//creates dummy sections main page
function initMainPage() {
    for (let i = 1; i < 5; i++) {
        createSections();
    }
}

//creates navbar based on sections
function createNavBarItem() {
    document.querySelectorAll("section").forEach(function (item) {
        let sectionTitle = item.getAttribute('data-nav');
        let sectionId = item.getAttribute('id');
        let tag = `<li><a href=#${sectionId} data-nav="${sectionId}"class="menu__link"> ${sectionTitle}</a></li>`
        document.getElementById("navbar__list").insertAdjacentHTML('beforeend', tag);
    });
}

initMainPage();
createNavBarItem();

//add new section
function addNewSection(){
    createSections();
    document.getElementById("navbar__list").innerHTML = "";
    createNavBarItem();
}

//listen click events for creates new section
document.getElementById('insertSectionBtn').addEventListener('click',addNewSection);

//get section element position with getBoundingClientRect function
function getSectionPositionBoundingClientRect (el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -300 &&
        rect.left >= 0 &&
        rect.bottom >= 0 &&
        rect.top <= window.innerHeight &&
        (rect.bottom <= window.innerHeight || rect.bottom <= el.clientHeight + 5)
    );
}
//highlights Section By Position
function highlightSectionByPosition(){
    let sections = document.querySelectorAll("section");
    sections.forEach(function (box) {
        if (getSectionPositionBoundingClientRect(box))
            box.classList.add('your-active-class');
        else
            box.classList.remove('your-active-class');
    });
}

document.addEventListener('scroll',highlightSectionByPosition);

// scroll To Clicked Section In Navbar
function  scrollToClickedSectionInNavbar(event){
    event.preventDefault();
    let sectionID = event.target.getAttribute('data-nav');
    let sectionElement = document.getElementById(sectionID);
    sectionElement.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("navbar__list").addEventListener('click', scrollToClickedSectionInNavbar );