






fetch("./data.json")
    .then(response => response.json())
    .then(data => getFamily(data));



function getFamily(data) {
    var add = document.getElementById("myCarousel");
    var cards = [];

    for (var i = 1; i < data.farmers.length; i++) {
        let card = "card" + i.toString();
        let name = data.farmers[i].name;
        let age = data.farmers[i].age;
        let description = data.farmers[i].description;
        let AddFam = document.createElement("div");
        AddFam.classList.add("carousel-item active");
        AddCard.innerHTML = `
            
        `;

    }
}


<div className="carousel-inner">
    <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        </svg>
        <div className="container">
            <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p className="opacity-75">Some representative placeholder content for the first slide of the
                    carousel.</p>
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        </svg>
        <div className="container">
            <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        </svg>
        <div className="container">
            <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
            </div>
        </div>
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>