

import { useState, useEffect } from "react";
import { obtenerEventos } from "../services/api";

export function useApi() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {

        const obtenerData = async () => {
            try {
                setLoading(true);
                setError(null);
                const eventos = await obtenerEventos();
                setData(eventos);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }    
        obtenerData(); 
    }, []);
    
    
    return { loading, error, data };
}