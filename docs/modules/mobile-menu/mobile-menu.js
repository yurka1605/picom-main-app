import { html, mobileMenuButtonClose, mobileMenu } from "../_vars";

export const mobileMenuCheckEvents = () => {
    mobileMenuButtonClose.addEventListener('click', () => {
        mobileMenu.classList.remove('showBlock');
        html.classList.remove('noScroll');
    });  
};