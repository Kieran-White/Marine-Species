import { useState, useEffect } from 'react';

// Pass this function a species name and it will return all of its data.
const useFetchSpeciesData = (speciesName = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpeciesData = async () => {
            try {
                const endpoint = speciesName ? `/api/species/${speciesName}` : '/api/species';
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                console.log(response)
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchSpeciesData();
    }, [speciesName]);

    return { data, loading, error };
};

export default useFetchSpeciesData;