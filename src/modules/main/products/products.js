import { showAllProduct } from "../../_vars";

export const productsCheckEvents = () => {
    showAllProduct.addEventListener('click', function() {
        this.parentElement.previousElementSibling.classList.toggle('full-height');
    });
}