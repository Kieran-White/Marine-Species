import { Link } from 'react-router-dom';
import "./SpeciesList.css";
import useFetchSpeciesData from './FetchSpeciesData';
import { useEffect } from 'react';

export default function SpeciesList() {

    const { data, loading, error } = useFetchSpeciesData();

    useEffect(() => {

    });

    console.log(data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className='profile-page-wrapper'>Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className='profile-page-wrapper'>No Data Found</div>
    }

    const endangerList = ["least_concern.png", "near_threatened.png", "vulnerable.png", "endangered.png", "critically_endangered.png", "extinct_in_the_wild.png", "extinct.png"];

    return (
        <div className="home-species-list" id="speciesListContainer">
            {data.map((speciesData, index) => (
                <div key={index} className="species-container species-root-class-name">
                    <Link to={`/species/${encodeURIComponent(speciesData.species)}`}>
                        <img
                            alt={`${speciesData.species}-image`}
                            src={require(`../images/${speciesData.speciesImg}`)}
                            className="species-image" />
                        <span className="species-name">{speciesData.species}</span>
                        <img
                            alt="rating-image"
                            src={require(`../images/${endangerList[speciesData.endangerLevel]}`)}
                            width="145"
                            className="species-rating" />
                    </Link>
                </div>
            ))}
        </div>
    );
}

