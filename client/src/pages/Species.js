import "./Species.css";

export default function Species(){

    const speciesImg = "";
    const speciesStatus = "";
    const speciesCommon = "";
    const specScientific = "";
    const specLength = "";
    const specHabitats = "";

    return (
        <>
            
            <div className="SpeciesInfoGrid">
                <img
                    src={speciesImg}
                    className="SpeciesImage"
                />
                <h2>Status: {speciesStatus}</h2>
                <p>Common Name: {speciesCommon}</p>
                <p>Scientific Name: {specScientific}</p>
                <p>Length: {specLength}</p>
                <p>Habitats: {specHabitats}</p>
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