import { sliderRightArrow, sliderLeftArrow, slides } from '../../_vars';


export const sliderCheckEvents = () => {
    sliderLeftArrow.addEventListener('click', () => {
        console.log('left');
    });

    sliderRightArrow.addEventListener('click', () => {
        console.log('right');
    });
}