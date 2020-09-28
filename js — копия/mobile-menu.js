const mobileMenuBtn = document.querySelector('.mobile-menu_button--js');
const mobileMenu = document.querySelector('.mobile-menu--js');
const logoLink = document.querySelector('.case_logo-link');
const caseBtn = document.querySelector('.case-mobile-menu_button');
let toggleMobileMenu = true;

mobileMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (toggleMobileMenu) {
    mobileMenu.classList.add('mobile-menu--active');
    mobileMenuBtn.classList.add('mobile-menu_button--active');
    logoLink.classList.add('case_logo-link--active');
    caseBtn.classList.add('case-mobile-menu_button--active');
    toggleMobileMenu = false;
  } else {
    mobileMenu.classList.remove('mobile-menu--active');
    mobileMenuBtn.classList.remove('mobile-menu_button--active');
    logoLink.classList.remove('case_logo-link--active');
    caseBtn.classList.remove('case-mobile-menu_button--active');
    toggleMobileMenu = true;
  }
}