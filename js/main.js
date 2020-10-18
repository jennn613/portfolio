"use strict";

//make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
  });

  
  //Handle scrolling when tapping on the navbar menu
  const navbarMenu = document.querySelector('.navbar__menu');
  navbarMenu.addEventListener('click', (event) => {
    
  const target = event.target;
  const link= target.dataset.link;
  if(link == null){
    return;
  } scrollIntoView(link);
});

// contact button to contact section

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
})

    //make home fade in
  
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener('scroll', () => {

      home.style.opacity = 1 - window.scrollY / homeHeight;
    
  });

//scroll to the top

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () =>{
if(window.scrollY > homeHeight / 2)
{arrowUp.classList.add('visible');} else {
  arrowUp.classList.remove('visible');
}});

arrowUp.addEventListener('click', () => {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
});

  
function scrollIntoView(selector){const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});}