import React from 'react'
import useFetch from './useFetch'


const FetchData = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos")
    const errormasg= <p> errror </p>
    const loadingmasg = <p>loading</p>
    return (
        <div>
            {
                data.map((data) => (
                    <div key={data.id}>
                        <p>{data.title}</p>

                    </div>
                ))
            }
            {error && errormasg}
            {loading && loadingmasg}
        </div>
    )
}

export default FetchData
