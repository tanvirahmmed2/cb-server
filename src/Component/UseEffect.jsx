import React, { useState, useEffect } from 'react'

const UseEffect = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0)


  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw Error(" todos are not loading, try later");

          } else {

            return res.json();
          }
        })
        .then((data) => {
          setTodos(data);
          setLoading(false);
          setError(false)
        })
        .catch((error) => {
          setLoading(false)
          setError(error.message)
        })
    }, 3000);
  }, [])


  const loadingmasg = <p>todos are loading</p>
  return (

    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <h1 className='text-xl font-bold'>Todos</h1>
      {
        todos.map((todo) => (
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

export default UseEffect
