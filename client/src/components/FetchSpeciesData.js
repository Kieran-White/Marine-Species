import { useState, useEffect } from 'react';

// Pass this function a species name and it will return all of its data.
const useFetchSpeciesData = (speciesName) => {
    const [species, setSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpeciesData = async () => {
            try {
                const response = await fetch(`/api/${speciesName}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                console.log(response)
                const data = await response.json();
                setSpecies(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchSpeciesData();
    }, [speciesName]);

    return { species, loading, error};
};

export default useFetchSpeciesData;