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

    <div>
      <input type="text" className='border-2 outline-0 w-full rounded-2xl m-2 px-4' value={search} onChange={handleChange} />
    </div>
  )
}

export default Search
