import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import "./Species.css";
import useFetchSpeciesData from "../components/FetchSpeciesData";

export default function Species(){
    const { speciesName } = useParams();
    const { species, loading, error } = useFetchSpeciesData(speciesName)

    useEffect(() => {
        
    });
    
    console.log(species);

    
    if (!species) {
        return <div className='profile-page-wrapper'>Species not found</div>;
      }
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div className='profile-page-wrapper'>Error: {error.message}</div>;
      }

      const endangerList = ["least_concern.png", "near_threatened.png", "vulnerable.png", "endangered.png", "critically_endangered.png", "extinct_in_the_wild.png", "extinct.png"];
    // Define species stats
    const speciesStatus = species.endangerLevel;
    const speciesCommon = species.species;
    const speciesScientific = species.scientificName;    
    const speciesLength = species.length;
    const speciesHabitats = species.habitats;
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