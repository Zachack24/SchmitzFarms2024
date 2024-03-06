// Zach Schmitz
// zach24@iastate.edu
// 3/5/2024

fetch("./data.json")
.then(response => response.json())
.then(mySheep => loadSheep(mySheep));

function loadSheep(mySheep) {

 // Find the element “col” in HTML
 var CardSheep = document.getElementById("col");

 var checkboxes = [];
 var cards = [];

 // Read every Sheep from the array
 for (var i = 0; i<mySheep.sheep.length; i++){

     let checkbox = "checkbox" + i.toString();
     let card = "card" + i.toString();

     let name = mySheep.sheep[i].name;
     let birth_year = mySheep.sheep[i].birth_year;
     let father = mySheep.sheep[i].father;
     let mother = mySheep.sheep[i].mother; 
     let breed = mySheep.sheep[i].breed;
     let weight = mySheep.sheep[i].weight;
     let price = mySheep.sheep[i].price;
     let gender = mySheep.sheep[i].gender;
     let image = mySheep.sheep[i].image;

     let AddCardSheep = document.createElement("div");

     // add class = “col” to new division for Bootstrap
     AddCardSheep.classList.add("col");

     // create Bootstrap card
     AddCardSheep.innerHTML = ` 
     <input type="checkbox" id=${checkbox} class="form-check-input" checked>
     <label for=${checkbox} class="form-check-label">Show Image ${i}</label>

     <div  id=${card} class="card shadow-sm">
         <img src=${image} class="card-img-top" alt="..."></img>
         <div class="card-body">
             <p class="card-text"> <strong>${name}</strong>, ${birth_year}</p>
                 <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                         <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                         <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                     </div>
                     <small class="text-body-secondary">9 mins</small>
                 </div>
         </div>
     </div>
     `;
     // append new division
     CardSheep.appendChild(AddCardSheep);

     let cbox = document.getElementById(checkbox);
     checkboxes.push(cbox);
     let ccard = document.getElementById(card);
     cards.push(ccard);

     console.log(checkbox);
     console.log(card);
 } // end of for
 console.log(checkboxes);
 console.log(cards);

 checkboxes.forEach((checkboxParam, index) => {
     console.log(index);

     checkboxParam.addEventListener('change', () => {
         if (checkboxParam.checked) {
             cards[index].style.display = 'block'; // Show the card
         } else {
             cards[index].style.display = 'none'; // Hide the card
         }
     });
 });    
} // end of Function

















