import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import "./Species.css";
import useFetchSpeciesData from "../components/FetchSpeciesData";

export default function Species(){
    const { speciesName } = useParams();
    const { species, loading, error } = useFetchSpeciesData(speciesName)

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
        <div className='SpeciesContainer'>
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
                    src="{require(`../images/${}`)}"
                    className="StatusImage"
                />
            </div>
            <div className="SpeciesText">
                <p>Species text information</p>
            </div>
        </div>
    );
}