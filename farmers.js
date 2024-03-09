//Blake Clabaugh
//clab22@iastate.edu
//3/8/2024

fetch("./data.json")
    .then(response => response.json())
    .then(data => getFamily(data));



function getFamily(data) {
    var Sadd = document.getElementById("i");
    let name = data.farmers[0].name;
    let image = data.farmers[0].image;
    let description = data.farmers[0].description;
    let AddFam = document.createElement("div");
    AddFam.classList.add("carousel-inner")
    AddFam.innerHTML=`

    <div class="carousel-item active">
        <img src=${image} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></img>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>${name}</h1>
            <p>${description}</p>
          </div>
        </div>
      </div>`;
    Sadd.appendChild(AddFam);

    for(let i = 1;i < data.farmers.length;i++) {
        let AddFam = document.createElement("div");
        AddFam.classList.add("carousel-inner")
        name = data.farmers[i].name;
        image = data.farmers[i].image;
        description = data.farmers[i].description;


        AddFam.innerHTML = ` 
 
        <div class="carousel-item">
        <img src=${image} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="60%" fill="var(--bs-secondary-color)"/></img>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>${name}</h1>
            <p>${description}</p>
          </div>
        </div>
      </div>`;

        Sadd.appendChild(AddFam);
    }

    }


