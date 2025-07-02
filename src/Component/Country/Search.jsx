import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [search, setSearch]=useState("")
    useEffect(()=>{
        props.onSearch(search)
    },[search])
    const handleChange=(e)=>{
        setSearch(e.target.value);
        
    }
  return (

    <div className='flex flex-row items-center justify-center'>
      <input type="text" className='border-2 outline-0 w-full rounded-2xl m-2 px-4' value={search} onChange={handleChange} />
      <button className='border-2 w-50 h-8 rounded-2xl' onClick={props.onsort}>Sort</button>
    </div>
  )
}

export default Search
