import { html, notificationButtons, notificationLinks, mobileMenuButtonShow, mobileMenu, inputSearch } from "../_vars";
import { popupCall } from '../popup/popup';

export const headerCheckEvents = () => {
    mobileMenuButtonShow.addEventListener('click', () => {
        mobileMenu.classList.add('showBlock');
        html.classList.add('noScroll');
    });

    inputSearch.addEventListener('change', (event) => {
        const inputValue = event.target.value;
        const RegexpInputSearch = new RegExp(`${ inputValue }`, 'igm');
        const htmlNodeText = `${ html.innerText }`; 
        
        RegexpInputSearch.test(htmlNodeText) ? alert('Найдено') 
            : alert('Нет совпадений на данной странице');   
        event.target.value = '';
    });

    for (let i = 0; i < notificationButtons.length; i++) {
        notificationButtons[i].addEventListener('click', () => popupCall('', 'signIn'));

        notificationLinks[i].addEventListener('click', () => popupCall('', 'signUp'));
    }
};