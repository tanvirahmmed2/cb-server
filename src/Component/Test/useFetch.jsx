import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData]= useState([]);
    const [error, setError]= useState(false);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("fetching stopped")
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            setData(data);
            setError(false)
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false)
        })
    })
  return {data, loading, error}
}

export default useFetch
