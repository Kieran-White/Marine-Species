document.addEventListener("DOMContentLoaded", function () {
    var speciesList = ["Sea Turtle", "Penguin", "Dolphin", "Seal"];

    // Reference to the container div
    var speciesListContainer = document.getElementById("speciesListContainer");

    // Loop through the list and create species items dynamically
    for (var i = 0; i < speciesList.length; i++) {
        // Create a new species container div
        var speciesContainer = document.createElement("div");
        speciesContainer.className = "species-container species-root-class-name";

        // Create an anchor element for each species
        var speciesLink = document.createElement("a");
        speciesLink.href = "species-page.html"; // Set the appropriate href

        // Create an image element
        var speciesImage = document.createElement("img");
        speciesImage.alt = "image";
        speciesImage.src = "https://play.teleporthq.io/static/svg/default-img.svg"; // Set the appropriate image source
        speciesImage.className = "species-image";
        // Create a span element for species name
        var speciesName = document.createElement("span");
        speciesName.className = "species-name";
        speciesName.innerHTML = "<span>" + speciesList[i] + "</span>";

        //rating stuff (use loops later)
        var ratingContainer = document.createElement("div")
        ratingContainer.className = "rating-container"

        var star = document.createElement("svg")
        star.setAttribute("ViewBox", "0 0 950.8571428571428 1024")
        star.className = "rating-icon"
        star.setAttribute("d", "M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z")
        ratingContainer.appendChild(star);
        
        // Append the image and name elements to the species link
        speciesLink.appendChild(speciesImage);
        speciesLink.appendChild(speciesName);
        speciesLink.appendChild(star);

        // Append the species link to the species container
        speciesContainer.appendChild(speciesLink);

        // Append the species container to the species list container
        speciesListContainer.appendChild(speciesContainer);
    }
});