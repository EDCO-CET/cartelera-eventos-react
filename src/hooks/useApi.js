

import { useState, useEffect } from "react";

export function useApi(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {

        const obtenerData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }    
        obtenerData(); 
    }, [url]);
    
    
    return { loading, error, data };
}