import { useState, useEffect } from 'react';


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