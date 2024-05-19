import React from "react";
import { useParams } from 'react-router-dom';
import "./Species.css";
import useFetchSpeciesData from "../components/FetchSpeciesData";

export default function Species() {
    const { speciesName } = useParams();
    const { data: species, loading, error } = useFetchSpeciesData(speciesName);

    // Error handling for unexpected errors
    if (error) {
        return <div className='profile-page-wrapper'>Error: {error.message}</div>;
    }

    // If species data is not available, display "Species not found"
    if (!species) {
        return <div className='profile-page-wrapper'>Species not found</div>;
    }

    // Display loading message while data is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    // Species data is available, extracting information for display
    const endangerList = ["least_concern.png", "near_threatened.png", "vulnerable.png", "endangered.png", "critically_endangered.png", "extinct_in_the_wild.png", "extinct.png"];
    const speciesStatus = species.endangerLevel;
    const speciesCommon = species.species;
    const speciesScientific = species.scientificName;
    const speciesLength = species.length;
    // Joining habitats array into a comma-separated string
    const speciesHabitats = species.habitats.join(", ");
    const speciesInformation = species.information;

    return (
        <div className='SpeciesContainer'>
            <div className="SpeciesInfoGrid">
                <img
                    src={require(`../images/${species.speciesImg}`)}
                    className="SpeciesImage"
                    alt="animal"
                />
                <h2>Status:
                    <img
                        src={require(`../images/${endangerList[speciesStatus]}`)}
                        className="StatusImage"
                        alt={`Endangerment level: ${speciesStatus}`}
                    />
                </h2>
                <p>Common Name: {speciesCommon}</p>
                <p>Scientific Name: {speciesScientific}</p>
                <p>Length: {speciesLength}</p>
                <p>Habitats: {speciesHabitats}</p>
            </div>
            <div className="SpeciesText">
                <p>{speciesInformation}</p>
            </div>
        </div>
    );
}
