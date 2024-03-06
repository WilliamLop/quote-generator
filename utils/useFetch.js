"use client";
import { useEffect, useState } from "react";

export function useFetch(url){
    
    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

        const abortController = new AbortController();

        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const allQuotes = data.data;
                setQuotes(allQuotes); // Asumiendo que la lista de citas está en data.data

                // Obtener una cita aleatoria de la lista de citas
                const randomIndex = Math.floor(Math.random() * allQuotes.length);
                const randomQuote = allQuotes[randomIndex];
                setRandomQuote(randomQuote);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));

        return () => abortController.abort();  /* Si el componente se desmonta, se detiene la petición asíncrona */
    }, [url]);

    return { quotes, randomQuote, loading, error };
}
