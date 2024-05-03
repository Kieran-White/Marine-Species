import { useEffect } from "react";
import "./Species.css";
import useFetchSpeciesData from "../components/FetchSpeciesData";

export default function Species(){
    const { species, loading, error } = useFetchSpeciesData("Hawksbill Turtle")

    useEffect(() => {
        
    });

    //const { speciesData, loading, error } = useFetchSpeciesData("Hawksbill Turtle");
    //console.log(speciesData);

    
    if (!species) {
        return <div className='profile-page-wrapper'>Species not found</div>;
      }
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div className='profile-page-wrapper'>Error: {error.message}</div>;
      }

    // Define species stats
    const speciesStatus = species.endangerLevel;
    const speciesCommon = species.species;
    const speciesScientific = "";//speciesData.scientificName;    
    const speciesLength = "";//speciesData.length;
    const speciesHabitats = "";//speciesData.habitats;

    
    return (
        <>
            <div className="SpeciesInfoGrid">
                <img
                    src={require(`../images/${species.speciesImg}`)}
                    className="SpeciesImage"
                    alt="animal"
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