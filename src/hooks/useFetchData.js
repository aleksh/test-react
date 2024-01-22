import { useEffect, useState } from "react";


export default function useFetchData(url, normalizeData) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (normalizeData !== undefined) {
                    setData(normalizeData(data));
                } else {
                    setData(data);
                }
            })
            .catch(error => {
                setError(error.message)
            }).finally(() => {
                setLoading(false);
            })
    }, [url])

    return {data, error, loading};
} 