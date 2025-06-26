import React ,{useState, useEffect} from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error(" todos are not loading, try later");

                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setData(data);
                    setLoading(false);
                    setError(false)
                })
                .catch((error) => {
                    setLoading(false)
                    setError(error.message)
                })
        }, 3000);
    }, [])
    return {data, loading, error}
}

export default UseFetch
