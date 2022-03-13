// Show Menu ---------------------------------------
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile ---------------------------------------
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Header Color When Scrolling ---------------------------------------
function scrollHeader(){
    const header = document.getElementById('header'),
          navLogo = document.getElementById('nav-logo'),
          navToggle = document.getElementById('nav-toggle')
    //When the scroll is greater than 50 viewport height, change header backgroung
    if(this.scrollY >= 50){
        header.classList.add('scroll-header')
        navLogo.classList.add('scroll-nav')
        navToggle.classList.add('scroll-nav')
    }else{
        header.classList.remove('scroll-header')
        navLogo.classList.remove('scroll-nav')
        navToggle.classList.remove('scroll-nav')
    } 
}
window.addEventListener('scroll', scrollHeader)

// Gallery Image Animation When Scrolling ---------------------------------------
const gallery = document.querySelectorAll('.gallery__img'),
      galleryAnimation = document.querySelector('.img-animation')

function scrollGallery(){
    //When the scroll is greater than first gallery image viewport height, add fadein animation to all gallery image background
    if(this.scrollY >= (gallery[0].offsetTop - 500) && !galleryAnimation){
        gallery.forEach(n => n.classList.add('img-animation'))
    }
}
window.addEventListener('scroll', scrollGallery)

// Services Animation When Scrolling ---------------------------------------
const services = document.querySelectorAll('.services__card'),
      servicesAnimation = document.querySelector('.services__show')

function scrollServices(){
    //When the scroll is greater than first Services image viewport height, add fadein animation to all Services 
    if(this.scrollY >= (services[0].offsetTop - 500) ){
        services.forEach(n => n.classList.add('services__show'))
    }
}
window.addEventListener('scroll', scrollServices)



// Carousel Testimonial ---------------------------------------
function showTestimonial(i){
    const articleIndex = i.getAttribute('data-target'),
          articles = document.querySelectorAll('.testimonial__card'),
          link = document.querySelectorAll('.carousel__link')

    // Remove all testimonials that has carousel__show class 
    articles.forEach(n => n.classList.remove('carousel__show'))
    // Remove all carousel links that has carousel__active class 
    link.forEach(n => n.classList.remove('carousel__active'))

    // Add carousel__show class to testimonial__card that has index same with data target
    document.getElementsByClassName('testimonial__card')[articleIndex].classList.add('carousel__show')
    // Add carousel__active class to carousel__link that has index same with data target
    document.getElementsByClassName('carousel__link')[articleIndex].classList.add('carousel__active')
}

// Scroll UP ---------------------------------------
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    //When the scroll is greater than 350, show scroll up button 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

// Scroll Section Active Link ---------------------------------------
const sections = document.querySelectorAll('section[id]'),
      headerHeight = document.getElementById('header').offsetHeight

function scrollActive(){
    sections.forEach( current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - headerHeight,
              sectionId = current.getAttribute('id')
        if(this.scrollY > sectionTop && this.scrollY <= sectionTop + sectionHeight ){
            document.querySelector('[href="#'+sectionId+'"]').classList.add('active-link')
        }else{
            document.querySelector('[href="#'+sectionId+'"]').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);
