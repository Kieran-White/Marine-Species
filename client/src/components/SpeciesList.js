
export default function SpeciesList() {
    const speciesList = ["Hawksbill Turtle", "Vaquita", "Leatherback Turtle", "Blue Whale", "Stellar Sea Lion", "Monk Seal", "Green Sea Turtle", "Nile Crocodile", "Ganges River Dolphin"];
    const imgList = ["hawksbill_turtle.jpg", "vaquita.jpg", "leatherback_turtle.jpg", "blue_whale.jpg", "stellar_sea_lion.jpg", "monk_seal.jpg", "green_sea_turtle.jpg", "nile_crocodile.jpg", "ganges_river_dolphin.jpg"]
    const levelList = [5, 5, 2, 3, 3, 3, 3, 0, 3]
    const endangerList = ["least_concern.png", "near_threatened.png", "vulnerable.png", "endangered.png", "critically_endangered.png", "extinct_in_the_wild.png", "extinct.png"];

    return (
        <div className="home-species-list" id="speciesListContainer">
            {speciesList.map((species, index) => (
                <div key={index} className="species-container species-root-class-name">
                <a href="species">
                    <img alt="animal-image" src={`images/${imgList[index]}`} className="species-image" />
                    <span className="species-name">{species}</span>
                    <img alt="rating-image" src={`images/${endangerList[levelList[index]]}`} width="145" className="species-rating" />
                </a>
                </div>
            ))}
        </div>
    );
}

