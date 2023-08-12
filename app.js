const main=document.querySelector(".main")
const servis=document.querySelector(".servis")
const staff = [
	{
	    "id": 1,
	    "name": "Alex Rosetta",
	    "email": "alexyrosetta@egmail.com",
	    "image": "staff-1.png",
	},
	{
	    "id": 2,
	    "name": "Maria July",
	    "email": "mariajuly@egmail.com",
	    "image": "staff-2.png",
	}
  ];
  const services = [
	{
	    "id": 1,
	    "name": "Oral hygiene",
	    "image": "service-1.jpg",
	    "duration": "1 hour",
	    "price": 50.00,
	},
	{
	    "id": 2,
	    "name": "Implants",
	    "image": "service-2.jpg",
	    "duration": "1 hour 30 minutes",
	    "price": 120.00,
	}
  ]; 
 

  let xStaff="";
  for (let i = 0; i < staff.length; i++) {
	xStaff+=`
			<div class="staff">
				<div class="stafImg"><img src="img/${staff[i].image}" alt=""></div>
				<div>
				<h4 class="staffName">${staff[i].name}</h4>
				<p>${staff[i].email}</p>	
				</div>
							
			</div>
	`;
  }

  main.innerHTML=xStaff;

  let xServices = "";
  for (let i = 0; i < services.length; i++) {
	  xServices += `
			  <div class="servisX">
				  <div class="servisXImg"><img src="img/${services[i].image}" alt=""></div>
				  <div class="Sflex">
					<div>
					<h4 class="servisXName">${services[i].name}</h4>
					<p>${services[i].duration}</p>	
					</div>
					<div class="price">
						${services[i].price}$
					</div>	
				  </div>
							  
			  </div>
	  `
  }
  servis.innerHTML = xServices;



















let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = slides.length}    
//   if (n < 1) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}