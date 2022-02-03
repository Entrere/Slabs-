import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// Слайдер
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.main-slider', {
	pagination: {
	  el: '.swiper-pagination',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		
	 },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	 },
 });

  new Swiper('.rec-slider', {

	pagination: {
	  el: '.rec-slider__pagination',
	  clickable: true,
	},  
	
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		410: {
			slidesPerView: 2,
			spaceBetween: 16,
		},
		867: {
			slidesPerView: 3,
			spaceBetween: 34,
		},
	},
 });

 //выпадающие спойлеры для мобилы в разделе информации 

let spoilers = document.querySelectorAll('.info-section__description-wrapper');

function addSpoiler (parentOfElements) {
	for (let i = 0; i < parentOfElements.length; i++){
		let parent = parentOfElements[i];
		parent.addEventListener('click', function (){
			let hiddenElements = parent.querySelectorAll("._vision-off");parent.classList.toggle("_btn-for-vision-all");
			for (let i = 0; i < hiddenElements.length; i++){
			let hiddenElement = hiddenElements[i];
			hiddenElement.classList.toggle("_vision-on");
			}
		});
	}
};

addSpoiler(spoilers);

		

	

	






	 


