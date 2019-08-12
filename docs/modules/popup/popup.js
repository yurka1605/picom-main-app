import { html, overlay, popup, signIn, signUp, popupSubmit } from "../_vars";

export const popupCheckEvents = () => {
    for (let i = 0; i < popupSubmit.length; i++) {
        popupSubmit[i].addEventListener('click', () => popupCall('remove'));
    }

    overlay.addEventListener('click', () => popupCall('remove'));
}

export const popupCall = (action, typePopup) => {
    if (action === 'remove'){
        html.classList.remove('noScroll');
        overlay.classList.remove('show');
        popup.classList.remove('show');
        signUp.classList.remove('show');
        signIn.classList.remove('show');
    } else {
        html.classList.add('noScroll');
        overlay.classList.add('show');
        popup.classList.add('show');
        typePopup === 'signUp' ? signUp.classList.add('show') : signIn.classList.add('show');
    }
};