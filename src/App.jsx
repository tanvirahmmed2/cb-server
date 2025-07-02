import React, { useEffect, useState } from 'react'
import Countries from './Component/Country/Countries';
import Search from './Component/Country/Search';


const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3";



const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredcountries, setFilteredCountries] = useState(countries)
  const [isloading, setIsLoading] = useState(true)
  const [error, setError] = useState("")



  const fetchdata = async () => {
    try {
      const response = await fetch(url);
      const datas = await response.json();
       const data = datas.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setCountries(data)
      setFilteredCountries(data)
      setError(false)
      setIsLoading(false)
      console.log(data);
     
    
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }


  }
  const errormasg = "failed fetching data"
  const loadingmasg = "loading info......"

  useEffect(() => {
    fetchdata()


  }, [])
  const handleRemoveCountry=(name)=>{
    const  filter= filteredcountries.filter((country)=>
      country.name.common !== name
    );
    setFilteredCountries(filter)
  }

  const handleSearch=(searchvalue)=>{
    let value= searchvalue.toLowerCase()
    const newcountries= countries.filter((country)=>{
      const countryname= country.name.common.toLowerCase();
      return countryname.startsWith(value)
    })
    setFilteredCountries(newcountries)
  }

  
  const handlesort=()=>{
    
    const sortedByName = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    console.log(sortedByName);
    setFilteredCountries(sortedByName)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center h-auto'>
      <h1 className='text-5xl w-full text-center mb-4'>Country:</h1>
      <Search onSearch={handleSearch} onsort={handlesort}/>
      {isloading && <h1>{loadingmasg} </h1>}
      {error && <h1>{errormasg}</h1>}
      {countries && <Countries countries={filteredcountries} onRemove={handleRemoveCountry} />}

    </div>
  )
}

export default App
