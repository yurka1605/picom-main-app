import { sliderRightArrow, sliderLeftArrow, slides, slide } from '../../_vars';


export const sliderCheckEvents = () => {
    sliderLeftArrow.addEventListener('click', () => {
        switchSlide(false);
        console.log('left');
    });

    sliderRightArrow.addEventListener('click', () => {
        switchSlide(true);
        console.log('right');
    });

    function switchSlide(isRight) {
        let activeSlide;
        slide.forEach(el => {
            if (el.classList.contains('active')) {
                activeSlide = el;
            }
        });

        if (isRight) {

        } else {

        }
    }
}