// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //Validate that variables exist
    if (toggle &&  nav) {
        toggle.addEventListener('click', () =>{
            //We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//SCROLL SECTIONS
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*= ' + sectionId +']')
            .classList.add('active-link')
        }else {
            document.querySelector('.nav__menu a[href*= ' + sectionId +']')
            .classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLLTOP
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// REDUCE THE SIZE AND PRİNT ON A4
function scaleCv() {
    document.body.classList.add('scale-cv')
}

// REMOVE THE SIZE WHEN CV IS DOWNLOADED
function removeScale() {
    document.body.classList.remove('scale-cv')
}

// GENERATE PDF
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

let opt = {
    margin:       0,
    filename:     'zeynepEsirgenciCV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
};

function generateResume() {

    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', () => {
    scaleCv()
    generateResume()
})
