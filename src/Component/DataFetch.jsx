import React, {useState} from 'react'
import UseFetch from './UseFetch'

const DataFetch = () => {
    const { data, loading, error } = UseFetch("https://jsonplaceholder.typicode.com/todos")
    const loadingmasg = <p>todos are loading</p>

    const [count, setCount] = useState(0)
    return (

        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <h1 className='text-xl font-bold'>Todos</h1>
            {
                data.map((todo) => (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                    </div>
                ))
            }
            {loading && loadingmasg}
            {error && <p>{error} </p>}
        </div>
    )
}

export default DataFetch
