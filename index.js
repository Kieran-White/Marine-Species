document.addEventListener("DOMContentLoaded", function () {
    var speciesList = ["Sea Turtle", "Penguin", "Dolphin", "Seal","Blob"];
    var speciesListContainer = document.getElementById("speciesListContainer");

    for (var i = 0; i < speciesList.length; i++) {
        var speciesContainer = document.createElement("div");
        speciesContainer.className = "species-container species-root-class-name";

        var speciesLink = document.createElement("a");
        speciesLink.href = "species-page.html"; //Find a way for the site to find source so that it dynamically changes

        var speciesImage = document.createElement("img");
        speciesImage.alt = "image";
        speciesImage.src = "https://play.teleporthq.io/static/svg/default-img.svg"; //Change Image based on the animal
        speciesImage.className = "species-image";
        var speciesName = document.createElement("span");
        speciesName.className = "species-name";
        speciesName.innerHTML = "<span>" + speciesList[i] + "</span>";

        //add the rating system

        speciesLink.appendChild(speciesImage);
        speciesLink.appendChild(speciesName);

        speciesContainer.appendChild(speciesLink);

        speciesListContainer.appendChild(speciesContainer);
    }
});