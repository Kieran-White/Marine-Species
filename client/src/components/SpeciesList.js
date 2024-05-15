import { Link } from 'react-router-dom';
import "./SpeciesList.css";

export default function SpeciesList() {
    const speciesList = ["Hawksbill Turtle", "Vaquita", "Leatherback Turtle", "Blue Whale", "Sea Lions", "Green Turtle", "Ganges River Dolphin", "Yellowfin Tuna", "Narwhal"];
    const imgList = ["hawksbill_turtle.jpg", "vaquita.jpg", "leatherback_turtle.jpg", "blue_whale.jpg", "sea_lions.jpg", "green_turtle.jpg", "ganges_river_dolphin.jpg", "yellowfin_tuna.jpg", "narwhal.jpg"]
    const levelList = [4, 4, 2, 3, 3, 3, 3, 1, 0]
    const endangerList = ["least_concern.png", "near_threatened.png", "vulnerable.png", "endangered.png", "critically_endangered.png", "extinct_in_the_wild.png", "extinct.png"];

    return (
        <div className="home-species-list" id="speciesListContainer">
            {speciesList.map((species, index) => (
                <div key={index} className="species-container species-root-class-name">
                    <Link to={`/species/${encodeURIComponent(species)}`}>
                        <img alt="animal-image" src={require(`../images/${imgList[index]}`)} className="species-image" />
                        <span className="species-name">{species}</span>
                        <img alt="rating-image" src={require(`../images/${endangerList[levelList[index]]}`)} width="145" className="species-rating" />
                    </Link>
                </div>
            ))}
        </div>
    );
}

