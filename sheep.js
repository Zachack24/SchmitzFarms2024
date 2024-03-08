// Zach Schmitz
// zach24@iastate.edu
// 3/5/2024

fetch("./data.json")
.then(response => response.json())
.then(data => loadSheep(data));

function loadSheep(data) {

 // Find the element “col” in HTML
 var CardSheep = document.getElementById("col");


 var cards = [];

 // Read every Sheep from the array
 for (var i = 0; i<data.sheep.length; i++){

 
     let card = "card" + i.toString();

     let name = data.sheep[i].name;
     let birth_year = data.sheep[i].birth_year;
     let father = data.sheep[i].father;
     let mother = data.sheep[i].mother; 
     let breed = data.sheep[i].breed;
     let weight = data.sheep[i].weight;
     let price = data.sheep[i].price;
     let gender = data.sheep[i].gender;
     let image = data.sheep[i].image;

     let AddCardSheep = document.createElement("div");

     // add class = “col” to new division for Bootstrap
     AddCardSheep.classList.add("col");

     // create Bootstrap card
     AddCardSheep.innerHTML = ` 

     <div  id=${card} class="card shadow-md">
         <img src=${image} class="card-img-top" alt="..."></img>
         <div class="card-body">
             <p class="card-title"> <strong>${name}</strong></p>
             <p class="card-text"> ${gender} ${birth_year} | ${father} X ${mother}</p>
             <p class="card-text"> Breed: ${breed} Weight: ${weight}</p>
                 <div class="d-flex justify-content-between align-items-center"> 
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="openCardPage(${i})">More Info</button>
                    <small class="text-body-secondary">$${price}.00</small>
                </div>
         </div>
     </div>
     `;
     // append new division
     CardSheep.appendChild(AddCardSheep);

     let ccard = document.getElementById(card);
     cards.push(ccard);

     console.log(card);
 } // end of for

 console.log(cards);
   
} // end of Function

function openCardPage(cardNumber){

    localStorage.setItem('cardNumber',cardNumber);
    window.location.href='cardPage.html';
}
















