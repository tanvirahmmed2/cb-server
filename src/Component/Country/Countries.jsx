import React from 'react'
import Country from './Country'

const Countries = (props) => {
  return (
    <div className='grid grid-cols-4 justify-items-center gap-4 w-full h-auto'>
        {
            props.countries.map((country)=>(
                <Country key={country.cca3} country={country} onRemove={props.onRemove}/>
            ))
        }
      
    </div>
  )
}

export default Countries
