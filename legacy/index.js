document.addEventListener("DOMContentLoaded", function () {
    var speciesList = ["Hawksbill Turtle", "Vaquita", "Leatherback Turtle", "Blue Whale","Stellar Sea Lion","Monk Seal","Green Sea Turtle","Nile Crocodile","Ganges River Dolphin"];
    var imgList = ["hawksbill_turtle.jpg","vaquita.jpg","leatherback_turtle.jpg","blue_whale.jpg","stellar_sea_lion.jpg","monk_seal.jpg","green_sea_turtle.jpg","nile_crocodile.jpg","ganges_river_dolphin.jpg"]
    var levelList = [5,5,2,3,3,3,3,0,3]
    var endangerList = ["least_concern.png", "near_threatened.png", "vulnerable.png", "endangered.png","critically_endangered.png","extinct_in_the_wild.png","extinct.png"]
    var speciesListContainer = document.getElementById("speciesListContainer");

    for (var i = 0; i < speciesList.length; i++) {
        var speciesContainer = document.createElement("div");
        speciesContainer.className = "species-container species-root-class-name";

        var speciesLink = document.createElement("a");
        speciesLink.href = "species-page.html"; //Find a way for the site to find source so that it dynamically changes

        var speciesImage = document.createElement("img");
        speciesImage.alt = "animal-image";
        speciesImage.src = "images/" + imgList[i];
        speciesImage.className = "species-image";
        
        var speciesName = document.createElement("span");
        speciesName.className = "species-name";
        speciesName.innerHTML = "<span>" + speciesList[i] + "</span>";

        var ratingImage = document.createElement("img")
        ratingImage.alt = "rating-image"
        ratingImage.src = "images/" + endangerList[levelList[i]]
        ratingImage.width = 145
        ratingImage.className = "species-rating"

        speciesLink.appendChild(speciesImage);
        speciesLink.appendChild(speciesName);
        speciesLink.appendChild(ratingImage);

        speciesContainer.appendChild(speciesLink);

        speciesListContainer.appendChild(speciesContainer);
    }
});

// Database fetchers
async function getSpeciesAndDetails() {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var url = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(url, requestOptions)
        if (response.ok) {
            const body = JSON.parse((await response.json()).body);
            return body;
        }
    } catch (error) {
        console.log('error', error);
        return "Database Error";
    }
}