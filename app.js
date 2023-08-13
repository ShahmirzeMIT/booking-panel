const main = document.querySelector(".main");
const servis = document.querySelector(".servis");
const all = document.getElementsByClassName("all");
let takeTime = document.querySelector('.takeTime');
const alert=document.querySelector('.alert')

const alert1=document.getElementById('alert1')
const alert2=document.getElementById('alert2')
const alert3=document.getElementById('alert3')
const staff = [
    {
        "id": "staff1",
        "name": "Alex Rosetta",
        "email": "alexyrosetta@egmail.com",
        "image": "staff-1.png",
    },
    {
        "id": "staff2",
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
const date = ["2022-03-04", "2022-03-05", "2022-03-06"];
const time = [
    { "id": "timeId1", "start_time": "09:00", "end_time": "09:30" },
    { "id": "timeId2", "start_time": "09:30", "end_time": "10:00" },
    { "id": "timeId3", "start_time": "10:00", "end_time": "10:30" }
];



let xStaff = "";
for (let i = 0; i < staff.length; i++) {
    xStaff += `
        <div class="staff" id="staffChoose${i}" onclick="chooseStaff(${i})">
            <div class="stafImg"><img src="img/${staff[i].image}" alt=""></div>
            <div>
                <h4 class="staffName" id="${staff[i].id}">${staff[i].name}</h4>
                <p>${staff[i].email}</p>	
            </div>
        </div>
    `;
}

main.innerHTML = xStaff;


let staffPrev = null;

let staffName1;
function chooseStaff(i) {
    let elem = document.getElementById('staffChoose' + i);
    if (staffPrev) {
        staffPrev.style.border = "";
    }
    elem.style.border = "2px solid green";

    let staffName = elem.querySelector('.staffName').textContent;
    staffName1=staffName;
    staffPrev = elem;
   
}




let xServices = "";
for (let i = 0; i < services.length; i++) {
    xServices += `
        <div class="servisX" id="services${services[i].id}" onclick="chooseServices(${services[i].id})">
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
    `;
}
servis.innerHTML = xServices;
let servicesPrev=null
let serveName=""
let servePrice=""
function chooseServices(servisId){
const myservices=document.getElementById("services"+servisId)
if(servicesPrev){
	servicesPrev.style.border="";
}

myservices.style.border = "2px solid green";
let servicesName=myservices.querySelector('.servisXName').textContent;
let servicesprice=myservices.querySelector('.price').textContent;
serveName=servicesName
servePrice=servicesprice
console.log(servicesName,servicesprice)
isServicesSelected = true;
servicesPrev=myservices

}


function getServicesUpdate(){
	if (servicesPrev) {
		servicesPrev.style.border = "";
	 }
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	if (n > 0) {
	    if (slideIndex === 1) {
		   if (!staffPrev) {
			  alert1.style.display = "block";
			  return;
		   }
	    } else if (slideIndex === 2) {
		   if (!servicesPrev) {
			  alert2.style.display = "block";
			  return;
		   }
		   else if(slideIndex==3){

		   }
	    }
	    alert1.style.display = "none";
	    alert2.style.display = "none";

	    if (slideIndex < 2) {
		getServicesUpdate();
	 	}
	}
	
	showSlides(slideIndex += n);
 }
 

 





function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}



let dateindex = 1;
changeDate(dateindex);

function add(number) {
    changeDate(dateindex += number);
}

function forNow(number) {
    changeDate(dateindex = number);
}

function changeDate(number) {
    let i;

    if (number > all.length) {
        dateindex = all.length;
    }
    if (number < all.length) {
        dateindex = 1;
    }
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    all[dateindex - 1].style.display = "block";
}

let previousTd ;
let isTimeAppended = false;

function getData(n) {
    let currentTd = document.getElementById(`${n}`);
    

    if (previousTd) {
        previousTd.style.background = "";
    }

    currentTd.style.background = "#6C70DC";

    previousTd = currentTd;
    const select = document.querySelector('.takeTime > h5');
    select.style.display = "none";
    console.log(currentTd.textContent)
    if (!isTimeAppended) {
	
        const h5 = document.createElement('h5');
        const times = document.createElement('div');
        times.classList.add('times');
        h5.textContent = date[0];
        takeTime.append(h5);
	
        for (let i = 0; i < time.length; i++) {

            const oclock = document.createElement('div');
            oclock.classList.add('oclock');
            oclock.id = time[i].id;
            const pStart = document.createElement("p");
            const pEnd = document.createElement("p");
            pStart.textContent = time[i].start_time;
            pEnd.textContent = time[i].end_time;
            oclock.append(pStart, ' ', pEnd);
            times.append(oclock);
		 
        }
        takeTime.append(times);
        isTimeAppended = true;


        const oclockElements = document.querySelectorAll('.oclock');
        oclockElements.forEach(oclock => {
            oclock.addEventListener('click', () => {
                const clickedData = oclock.id;
                getTime(clickedData);
            });
        });
    }
}


let former = null;

function getTime(data) {
    console.log(data);

    let oclockElement = document.getElementById(data);
    
    if (oclockElement) {
        console.log(oclockElement.textContent);
        if (former) {
            former.style.background = "";
        }
        oclockElement.style.background = "green";
        former = oclockElement;
    }
}

const tds = document.querySelectorAll(".tds");
tds.forEach((td, index) => {
    td.addEventListener("click", () => {
        getData(index + 1);
    });
});

