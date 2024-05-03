import { useState } from "react";
import useFetchSpeciesData from "../components/FetchSpeciesData";
import "./Species.css";

export default function Species(){
    const [species, setSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const setSpeciesData = async () => {
        try {
            const response = await fetch("/api/Hawksbill Turtle");
            if (!response.ok) {
                throw new Error("Failed to fetch data")
            }
            const data = await response.json();
            setSpecies(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }

        console.log(species.endangerLevel)
    }

    //const { speciesData, loading, error } = useFetchSpeciesData("Hawksbill Turtle");
    //console.log(speciesData);

    const speciesImg = "";//speciesData.speciesImg;
    const speciesStatus = "";//speciesData.endangerLevel;
    const speciesCommon = "";//speciesData.commonName;
    const speciesScientific = "";//speciesData.scientificName;
    const speciesLength = "";//speciesData.length;
    const speciesHabitats = "";//speciesData.habitats;
    setSpeciesData();

    return (
        <>
            
            <div className="SpeciesInfoGrid">
                <img
                    src={speciesImg}
                    className="SpeciesImage"
                />
                <h2>Status: {speciesStatus}</h2>
                <p>Common Name: {speciesCommon}</p>
                <p>Scientific Name: {speciesScientific}</p>
                <p>Length: {speciesLength}</p>
                <p>Habitats: {speciesHabitats}</p>
                <img
                    src="{}"
                    className="StatusImage"
                />
            </div>
            <div className="SpeciesText">
                <p>Species text information</p>
            </div>
        </>
    );
}