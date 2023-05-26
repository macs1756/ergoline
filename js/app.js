
const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");
btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});

btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});

let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
});






const MODAL_BUTTON = document.querySelectorAll(".modal-active");

	const MODAL_BODY = document.querySelector("#modal-container");

if(MODAL_BUTTON.length > 0){

	MODAL_BUTTON.forEach(btn=>{
		btn.addEventListener("click", ()=>{		
			MODAL_BODY.classList.remove("out");
			MODAL_BODY.classList.add("one");
		});
	})

}

MODAL_BODY.addEventListener("click", ()=>{

			MODAL_BODY.classList.add("out");
});

document.querySelector('.modal').addEventListener('click', function(e){
	e.stopPropagation();
});

document.querySelector('.modal__close').addEventListener('click', ()=>{
	MODAL_BODY.classList.add("out");
});



const swiper = new Swiper('.solariums__net', {
	
	spaceBetween: 20,
	autoheight: true,

	breakpoints: {

		0: {
			slidesPerView: 1,
			loop: true
		},

		600: {
			slidesPerView: 2,
			loop: true
		},


		992:{
			slidesPerView: 4,
		}
	},
	navigation: {
		nextEl: '.solariums__slider-next',
		prevEl: '.solariums__slider-prev',
	 },

});



const swiperPrice = new Swiper('.price__slider', {
	
	spaceBetween: 20,
	breakpoints: {

		0: {
			slidesPerView: 1,
			loop: true
		},

		600: {
			slidesPerView: 2,
			loop: true
		},


		992:{
			slidesPerView: 4,
		}
	},
	navigation: {
		nextEl: '.price__next',
		prevEl: '.price__prev',
	 },

});

