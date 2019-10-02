import { sliderRightArrow, sliderLeftArrow, slider } from '../../_vars';

export const sliderCheckEvents = () => {
    if (!('ontouchstart' in window)) {
        sliderLeftArrow.addEventListener('click', function() {
            switchSlide(false, this.parentElement.lastElementChild);
        });
    
        sliderRightArrow.addEventListener('click', function() {
            switchSlide(true, this.parentElement.lastElementChild);
        });
    } else {
        let startX;
        slider.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            startX = e.changedTouches[0].clientX;
        });

        slider.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let touchMoveX = e.changedTouches[0].clientX - startX;
            if (touchMoveX < -20 ) {
                switchSlide(true, this.lastElementChild);
            } else if (touchMoveX > 20) {
                switchSlide(false, this.lastElementChild);
            } else {
                return false;
            }
        });
    }

    function switchSlide(isRight, slides) {
        let activeSlide;

        Array.from(slides.children).forEach(el => {
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