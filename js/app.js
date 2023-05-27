

setTimeout(()=>{
	document.querySelector('h1').classList.add('active');
	document.querySelector('.initial__btn').classList.add('active');

},500)




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
	autoHeight: true,

	breakpoints: {

		0: {
			slidesPerView: 1,
			loop: true,
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
			loop: true,
			autoheight: true,
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



function openTab(evt, tabName) {
	// Закриваємо всі вкладки
	var i, tabContent, tabLinks;
	tabContent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabContent.length; i++) {
	  tabContent[i].style.display = "none";
	}

	document.querySelectorAll('.tab').forEach((tab)=>{
		tab.classList.remove('active');
	})


	evt.target.classList.add('active');
	document.getElementById(tabName).style.display = "block";
 }



 const swiperMakeup = new Swiper('.makeup__slider', {
	loop: true,
	spaceBetween: 14,
	breakpoints: {

		0: {
			slidesPerView: 1,
			autoheight: true,
		},

		600: {
			slidesPerView: 2,
		
		},

		767: {
			slidesPerView: 3,
			
		},
		992:{
			slidesPerView: 4,
			
		},

		1300: {
			slidesPerView: 5,
			
		}
	},
	navigation: {
		nextEl: '.makeup__next',
		prevEl: '.makeup__prev',
	 },

});


 const swiperPromotions = new Swiper('.promotions__net-body', {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 1,
	navigation: {
		nextEl: '.promotions-next',
		prevEl: '.promotions-prev',
	 },

});

$(document).ready(function() {
	$('.question__net-title').click(function() {
	  // Показываем или скрываем контент
	  $(this).next('.question__net-body').slideToggle();
	  // Добавляем или удаляем класс rotate
	  $(this).toggleClass('rotate');
	});
 });

 const swiperReview = new Swiper('.review__body', {
	loop: true,
	spaceBetween: 20,
	autoHeight: true,
	breakpoints: {

		0: {
			slidesPerView: 1,
			
		},

		600: {
			slidesPerView: 2,
			
		},
		992:{
			slidesPerView: 3,
			
		},
	},
	navigation: {
		nextEl: '.review-next',
		prevEl: '.review-prev',
	 },
});




const buttonSend = document.querySelector('#form-send');

const formName = document.querySelector('#modal-name');
const formPhone = document.querySelector('#modal-phone');


const studioVariant1 = document.querySelector('#studioVariant1');

buttonSend.addEventListener('click', ()=>{


	if(formName.value.length >= 3){
			formName.style.border = '1px solid #111111';
	}else{
		formName.style.border = '1px solid red';
	}


	if(formPhone.value.length >= 3){
		formPhone.style.border = '1px solid #111111';
	}else{
		formPhone.style.border = '1px solid red';
	}


	async function postMail(){
		    
		
		buttonSend.setAttribute('disabled', true);
		
	  let res = await fetch("null", {
		 method: "POST",
		 body: JSON.stringify({

			name: formName.value,

			tell: formPhone.value,

			studio: studioVariant1.checked ? 'Ergoline' : 'Ibiza',
			
		 }),
	  });
	
	  if(res.ok){
				 

		buttonSend.removeAttribute('disabled');

	  }else{
		 alert('error send messange');
	  }	
}


if(formName.value.length >= 3 && formPhone.value.length >= 3){
	postMail();
}
});




const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		 // Додати клас "актів", коли елемент потрапляє в активну зону
		 entry.target.classList.add("active");
		 // Зупинити спостереження для цього елемента, коли воно було анімовано
		 observer.unobserve(entry.target);
	  }
	  threshold: 0.8
	});
 });
 
 // Виберіть всі елементи з класом "anim" та додайте їх до спостереження
 const elements = document.querySelectorAll(".anim");
 elements.forEach(element => {
	observer.observe(element);
 });








