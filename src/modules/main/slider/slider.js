import { sliderRightArrow, sliderLeftArrow, slider, slides, slide } from '../../_vars';


export const sliderCheckEvents = () => {
    console.log('ontouchstart' in window);
    if (!('ontouchstart' in window)) {
        sliderLeftArrow.addEventListener('click', () => {
            switchSlide(false);
        });
    
        sliderRightArrow.addEventListener('click', () => {
            switchSlide(true);
        });
    } else {
        let startX;
        slider.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            startX = e.screenX;
        });

        slider.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.screenX;
            let touchMoveX = e.screenX - startX;

            if (touchMoveX > -10 ) {
                switchSlide(false);
            } else if (touchMoveX < 10) {
                switchSlide(true);
            } else {
                return false;
            }
        });
    }

    function switchSlide(isRight) {
        let activeSlide;
        slide.forEach(el => {
            if (el.classList.contains('active')) {
                activeSlide = el;
            }
        });

        if (isRight) {
            const nextSlide = activeSlide.nextElementSibling;

            if (!nextSlide) {
                slides.firstElementChild.classList.add('active');
                slides.firstElementChild.classList.remove('active-right');
                slides.appendChild(slides.firstElementChild);
            } else {
                nextSlide.classList.add('active');
            }
            activeSlide.classList.add('active-right');
            activeSlide.classList.remove('active');
        } else {
            const prevSlide = activeSlide.previousElementSibling;
            if (!prevSlide) {
                slides.lastElementChild.classList.add('active-right','active');
                slides.insertBefore(slides.lastElementChild, slides.firstElementChild);
                setTimeout(() => {
                    slides.firstElementChild.classList.remove('active-right');
                }, 0);
            } else {
                prevSlide.classList.remove('active-right');
                prevSlide.classList.add('active');
            }
            activeSlide.classList.remove('active');
        }
    }
}