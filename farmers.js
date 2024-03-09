






fetch("./data.json")
    .then(response => response.json())
    .then(data => getFamily(data));



function getFamily(data) {
    var add = document.getElementById("myCarousel");
    var cards = [];

    for (var i = 1; i < data.farmers.length; i++) {
        let card = "card" + i.toString();
        let name = data.farmers[i].name;
        let age = data.farmers[i].farmers;
        let description = data.farmers[i].description;
        let AddFam = document.createElement("div");
        AddFam.classList.add("carousel-item active");
        AddCard.innerHTML = `
            
        `;
        AddFam.appendChild(AddCard);
    }
}

