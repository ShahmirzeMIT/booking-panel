
const main = document.querySelector(".main");
const servis = document.querySelector(".servis");
const all = document.getElementsByClassName("all");
let takeTime = document.querySelector('.takeTime');
const alert=document.querySelector('.alert')
const show=document.getElementById("show")
const alert1=document.getElementById('alert1')
const alert2=document.getElementById('alert2')
const alert3=document.getElementById('alert3')
const gotName=document.getElementById("gotName")
const gotServe=document.getElementById("gotServe")
const gotDate=document.getElementById("gotDate")
const gotTime=document.getElementById("gotTime")
const gotPrice=document.getElementById("gotPrice")
const name=document.getElementById("name")
const lastname=document.getElementById("lastname")
const email=document.getElementById("email")
const phone=document.getElementById("phone")
const confirm=document.getElementById("confirm")
const textCont=document.getElementById("textCont")
const close=document.querySelector(".close")
const modal=document.querySelector(".modal")
const verify=document.querySelector(".verify")
const fail=document.querySelector(".fail")
const myStaff=document.getElementById("myStaff")
const myServices=document.getElementById("myServices") 
const myDateTime=document.getElementById("myDateTime")
const myConfirm=document.getElementById("myConfirm")
const rightSpan = document.querySelector('.rightSpan');
const leftSpan = document.querySelector('.leftSpan');

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
let xId;
function chooseStaff(i) {
    let elem = document.getElementById('staffChoose' + i);
    if (staffPrev) {
        staffPrev.style.border = "";
    }
    elem.style.border = "2px solid green";

    let staffName = elem.querySelector('.staffName').textContent;
    let staffId=elem.querySelector(".staffName").id
    xId = staffId.slice(-1);
    gotName.textContent = staffName;
    staffPrev = elem;
   
}

function getStaffUpdate(){
	if (staffPrev) {
		staffPrev.style.border = "";
		staffPrev=null
	 }
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

function chooseServices(servisId) {
	const myservices = document.getElementById("services" + servisId);
	if (servicesPrev) {
	    servicesPrev.style.border = "";
	}
 
	myservices.style.border = "2px solid green";
	let servicesName = myservices.querySelector('.servisXName').textContent;
	let servicesprice = myservices.querySelector('.price').textContent;
	let servicesId = "services" + servisId; 
	
	yId = servicesId.slice(-1); 
	isServicesSelected = true;
	servicesPrev = myservices;
	gotServe.textContent = servicesName;
	gotPrice.textContent = servicesprice;

}

 


function getServicesUpdate(){
	if (servicesPrev) {
		servicesPrev.style.border = "";
		servicesPrev=null
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
	    } else if (slideIndex === 3) {
		   if (!former || !previousTd) {
			  alert3.style.display = "block";
			  return;
		   }
	    }
	    
	    alert1.style.display = "none";
	    alert2.style.display = "none";
	    alert3.style.display = "none";
 
	    if (slideIndex < 2) {
		   getServicesUpdate();
	    }
	    if (slideIndex<3){
			getUpdateDateTime()
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
    
    if (slideIndex === 1) {
	myStaff.style.color = "#53D56C";
	let elem = myStaff.querySelector('.numbers');
	elem.textContent="1"
	elem.style.backgroundColor = "#53D56C";
 }
 if(slideIndex>1){
	myStaff.style.color = "white"
	let prevelem=myStaff.querySelector('.numbers');
	prevelem.innerHTML='<img src="img/Path.png"/>'
	prevelem.style.backgroundColor="#6C70DC"
 }
 if(slideIndex<2){
	myServices.style.color = "inherit";
	let elem = myServices.querySelector('.numbers');
	elem.textContent='2'
	elem.style.backgroundColor = "#4D545A";
 }

 if (slideIndex === 2) {
	myServices.style.color = "#53D56C";
	let elem = myServices.querySelector('.numbers');
	elem.style.backgroundColor = "#53D56C";
 }
 if (slideIndex > 2) {
	myServices.style.color = "white";
	let elem = myServices.querySelector('.numbers');
	elem.innerHTML='<img src="img/Path.png"/>'
	elem.style.backgroundColor = "#6C70DC";
 }
 if(slideIndex<3){
	myDateTime.style.color = "inherit";
	let elem = myDateTime.querySelector('.numbers');
	elem.textContent='3'
	elem.style.backgroundColor = "#4D545A";
 }

 if (slideIndex === 3) {
	myDateTime.style.color = "#53D56C";
	let elem = myDateTime.querySelector('.numbers');
	elem.style.backgroundColor = "#53D56C";
 }
 if (slideIndex > 3) {
	myDateTime.style.color = "white";
	let elem = myDateTime.querySelector('.numbers');
	elem.innerHTML='<img src="img/Path.png"/>'
	elem.style.backgroundColor = "#6C70DC";
 }
 if(slideIndex<4){
	myConfirm.style.color = "inherit";
	let elem = myConfirm.querySelector('.numbers');
	elem.textContent='4'
	elem.style.backgroundColor = "#4D545A";
 }
 if (slideIndex === 4) {
	myConfirm.style.color = "#53D56C";
	let elem = myConfirm.querySelector('.numbers');
	elem.style.backgroundColor = "#53D56C";
 }
 
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
    if (!isTimeAppended) {
	
        const h5 = document.createElement('h5');

        const times = document.createElement('div');
        times.classList.add('times');
	   for (let i = 0; i < date.length; i++) {
		let divDate=document.createElement("div")
		divDate.classList.add("mydates")
		divDate.textContent=date[i]
		h5.appendChild(divDate)
		
	   }
	   let currentIndex = 1;
	   h5.children[currentIndex].style.display = "block";
	   gotDate.textContent=h5.children[currentIndex].textContent
	   h5.addEventListener('click', () => {
		  h5.children[currentIndex].style.display = "none"; 
	   
		  currentIndex = (currentIndex + 1) % h5.children.length;
		  gotDate.textContent=h5.children[currentIndex].textContent
		  h5.children[currentIndex].style.display = "block"; 
	   });
	   
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

    let oclockElement = document.getElementById(data);
    
    if (oclockElement) {
        if (former) {
            former.style.background = "";
        }
        oclockElement.style.background = "#53D56C";
        oclockElement.style.color = "white";
        former = oclockElement;
    }
    gotTime.textContent=former.textContent
}

function getUpdateDateTime(){
	if(previousTd || former){
		previousTd.style.background = "";
		former.style.background = "";
		previousTd=null
		former=null
	}
}

const tds = document.querySelectorAll(".tds");
tds.forEach((td, index) => {
    td.addEventListener("click", () => {
        getData(index + 1);
    });
});



confirm.addEventListener('click',()=>{
	
	let Name=name.value
	let LastName=lastname.value
	let Email=email.value
	let Phone=phone.value
	modal.style.display="block"
	if(Name!="" && LastName!="" && Email!="" && Phone!=""){
		verify.style.display="block"
		
		if(fail.style.display="block"){
			fail.style.display="none"
		}
		const datasendJSon={
			costume:{
				name:name.value,
				lastName:lastname.value,
				email:email.value,
				phone:phone.value
			},
			date:gotDate.textContent,
			services_id:yId,
			staff_id:xId,
			time:gotTime.textContent
		}
		console.log(datasendJSon)
		setTimeout(() => {
			plusSlides(-3);
			getStaffUpdate();
			name.value=null
			lastname.value=null
			email.value=null
			phone.value=null
		},1000);
		
		
	}
	else{
		if(verify.style.display="block"){
			verify.style.display="none"
		}
		fail.style.display="block"
	}
})

close.addEventListener('click',()=>{
	modal.style.display="none";
})

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

let currentYear = 2023;
let currentMonth = 7;

function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const calendarTable = document.getElementById('calendarTable');
    const calendarMonth = document.getElementById('calendarMonth');

    calendarTable.innerHTML = '';

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDay) || date > daysInMonth) {
                row.innerHTML += '<td></td>';
            } else {
                row.innerHTML += `<td class="tds" id="${date}" onclick="getData(${date})">${date}</td>`;
                date++;
            }
        }

        calendarTable.appendChild(row);
    }

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    calendarMonth.textContent = `${monthNames[month]} ${year}`;
}

function changeMonth(step) {
    currentMonth += step;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    generateCalendar(currentYear, currentMonth);
    getUpdateDateTime(); // Clear selected date and time when changing month
}

generateCalendar(currentYear, currentMonth);



rightSpan.addEventListener('click', () => {
    changeMonth(-1);
    generateCalendar(currentYear, currentMonth);
});

leftSpan.addEventListener('click', () => {
    changeMonth(1);
    generateCalendar(currentYear, currentMonth);
});
