'use strict';
import './style/common.scss';
import { headerCheckEvents } from './modules/header/header';
import { mobileMenuCheckEvents } from './modules/mobile-menu/mobile-menu';
import { popupCheckEvents } from './modules/popup/popup';
import { sliderCheckEvents } from './modules/main/slider/slider';
import { productsCheckEvents } from './modules/main/products/products';

headerCheckEvents();
mobileMenuCheckEvents();
popupCheckEvents();
sliderCheckEvents();
productsCheckEvents();