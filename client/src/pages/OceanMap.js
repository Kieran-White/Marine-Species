import { Link } from 'react-router-dom';
import './OceanMap.css';

export default function OceanMap(){
    return (
        <>
        <div class="map-container">
            <img
            src='https://images.desenio.com/zoom/7314_2.jpg'
            alt='Map'
            className="interactive-map"
            />
            <Link to={`/species/${encodeURIComponent("Hawksbill Turtle")}`}>
            <button class="marker-1"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Vaquita")}`}>
            <button class="marker-2"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Leatherback Turtle")}`}>
            <button class="marker-3"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Blue Whale")}`}>
            <button class="marker-4"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Sea Lions")}`}>
            <button class="marker-5"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Green Turtle")}`}>
            <button class="marker-6"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Ganges River Dolphin")}`}>
            <button class="marker-7"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Yellowfin Tuna")}`}>
            <button class="marker-8"></button>
            </Link>
            <Link to={`/species/${encodeURIComponent("Narwhal")}`}>
            <button class="marker-9"></button>
            </Link>
        </div>
        </>
    );
}