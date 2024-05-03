import "./Species.css";

export default function Species(){
    return (
        <>
            
            <div className="SpeciesInfoGrid">
                <img
                    src="{}"
                    className="SpeciesImage"
                />
                <h2>Status: {}</h2>
                <p>Common Name: {}</p>
                <p>Scientific Name: {}</p>
                <p>Length: {}</p>
                <p>Habitats: {}</p>
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