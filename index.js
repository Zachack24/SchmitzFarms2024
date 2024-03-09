// Zach Schmitz
// zach24@iastate.edu
// 3/5/2024

fetch("./data.json")
.then(response => response.json())
.then(data => loadNav(data));

function loadNav(data) {

 // Find the element “col” in HTML
 var CardNav = document.getElementById("col");


 var cards = [];

 // Read every Nav from the array
 for (var i = 0; i<data.nav.length; i++){

 
     let card = "card" + i.toString();

     let pageDescription = data.nav[i].pageDescription;
     let navLink = data.nav[i].navLink;
     let navLinkName = data.nav[i].navLinkName;
     let image = data.nav[i].image; 

     let AddCardNav = document.createElement("div");

     // add class = “col” to new division for Bootstrap
     AddCardNav.classList.add("col");
     
     // create Bootstrap card
     AddCardNav.innerHTML = ` 

     
     <div id=${card} class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('${image}');" onclick="window.location.href='${navLink}';">
       <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
         <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${pageDescription}</h3>
         <ul class="d-flex list-unstyled mt-auto">
           <li class="me-auto">
             <img src="myotherimages/logo.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" style="background: white;">
           </li>
          
           <li class="d-flex align-items-center">
             <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
             <small>${navLinkName}</small>
           </li>
         </ul>
       </div>
     </div>
   </div>
     `;

     // append new division
     CardNav.appendChild(AddCardNav);

     let ccard = document.getElementById(card);
     cards.push(ccard);

     console.log(card);
 } // end of for

 console.log(cards);
   
} // end of Function

{/* 
<div class="col" onclick="window.location.href='farmers.html';">
  <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('images/farmerHome.png');">
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
      <ul class="d-flex list-unstyled mt-auto">
        <li class="me-auto">
          <img src="myotherimages/logo.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" style="background: white;">
        </li>
       
        <li class="d-flex align-items-center">
          <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
          <small>Farmers</small>
        </li>
      </ul>
    </div>
  </div>
</div>

 
<div class="col">
  <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('images/farmHome.png');">
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
      <ul class="d-flex list-unstyled mt-auto">
        <li class="me-auto">
          <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
        </li>
        <li class="d-flex align-items-center me-3">
          <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
          <small>Pakistan</small>
        </li>
        <li class="d-flex align-items-center">
          <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
          <small>4d</small>
        </li>
      </ul>
    </div>
  </div>
</div>
*/}