import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount]= useState(0)
    useEffect(()=>{
        console.log("hello useeffect")
    },[])
  return (

    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count + 1) }>Up</button>
      
    </div>
  )
}

export default UseEffect
