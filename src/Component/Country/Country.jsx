import React from 'react'

const Country = (props) => {
    const { name, capital, population, flags } = props.country;

    const handleRemove=(name)=>{
        props.onRemove(name)
    }
    return (
        <div className='flex flex-col w-50 h-auto p-4 rounded-2xl gap-2 items-center justify-between bg-amber-50'>
            <img src={flags.svg} alt="" />
            <p>{name.common}</p>
            <p>Population: {population}</p>
            <button onClick={()=>{
                handleRemove(name.common)
            }} className='px-4 bg-blue-600 rounded-2xl text-white cursor-pointer hover:scale-95'>Remove</button>
        </div>
    )
}

export default Country
