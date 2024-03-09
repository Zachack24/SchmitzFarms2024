// Zach Schmitz
// zach24@iastate.edu
// 3/5/2024


let cardNumber = localStorage.getItem('cardNumber');

fetch("./data.json")
.then(response => response.json())
.then(data => loadCardPage(data,cardNumber));

function loadCardPage(data,i) {
    console.log("Card number set to:", i);
    // Find the element “col” in HTML
    var CardSheep = document.getElementById("cardpage");
    // Read every Sheep from the array
   
    let card = "card" + i.toString();

    let name = data.sheep[i].name;
    let birth_year = data.sheep[i].birth_year;
    let father = data.sheep[i].father;
    let mother = data.sheep[i].mother; 
    let breed = data.sheep[i].breed;
    let weight = data.sheep[i].weight;
    let price = data.sheep[i].price;
    let gender = data.sheep[i].gender;
    let description = data.sheep[i].description;
    let image = data.sheep[i].image;

    let AddCardSheep = document.createElement("div");

    // create Bootstrap card
    AddCardSheep.innerHTML = ` 

    <div id=${card} >
    <div class="d-flex justify-content-between align-items-center">
        <div class="card-body">
            <div class="d-flex align-items-center" style="margin-bottom: .5vw;">
                <a class="ret-link" href="./index.html">Home</a>
                <a>&nbsp | &nbsp</a>
                <a class="ret-link" href="./sheep.html">Sheep</a>
                <a>&nbsp | &nbsp</a>
                <a>${name}</a>
            </div>
            <img id="card-image" src= ${image}></img>
        </div>
        <div class="card-body">
            <h1 class="name-text"> ${name}</h1>
            <div class="main-text">
                <h5 class="card-text"> ${gender} ${birth_year} | ${father} X ${mother}</h5>
                <p>${description}</p>
                <h5 class="card-text"> Breed: ${breed} | Weight: ${weight}</h5>
                <div class="text-left" style="margin-top: 3vw;">
                <button type="button" class="btn btn-lg btn-outline-secondary" onclick="openPurchase(${price}, '${name}')">$${price}.00</button>

                </div>
                
            </div>   
        </div>
    </div>
</div>
    `;
    // append new division
    CardSheep.appendChild(AddCardSheep);
   } // end of Function

   function openPurchase(price,name){
        var message = `You have selected: ${name}\nPrice: $${price}.00`;
        window.alert(message);

   }