// This is all you.
import flatpickr from "flatpickr";

import dayjs from "dayjs";
window.dayjs = dayjs;

import { register } from 'swiper/element/bundle';
register();

import LazyLoad from "vanilla-lazyload";
window.lazyLoadInstance = new LazyLoad();

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';
window.PhotoSwipeLightbox = PhotoSwipeLightbox;
window.PhotoSwipe = PhotoSwipe;

import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
window.intlTelInput = intlTelInput;

import axios from "axios";
window.axios = axios;