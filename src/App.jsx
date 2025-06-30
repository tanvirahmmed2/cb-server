import React, {useState, useEffect} from 'react'


import { v4 as uuidv4 } from 'uuid';


import NavBar from './Component/NavBar'
import ToastMasg from './Component/ToastMasg'
import FetchData from './Component/Test/FetchData'
import Country from './Component/Country/Country'


const url= "https://restcountries.com/v3.1/all";
function App() {
  const [loading, setLoading]= useState(true);
  const [countries, setCountries]= useState([]);
  const [error, setError]=useState(false);
 const fetchData=()=>{
  try {
    const response= fetch(url).json();
    const countries= response.data()
    setCountries(countries)
    setLoading(false)
    setError(false)
  } catch (error) {
    setError(true)
    setLoading(false)
  }
 
  
  
 }
  useEffect(()=>{
    setTimeout(() => {
      fetchData()
    }, 3000);
  },[])

const loadingmasg= <h1>Loading</h1>
const errmasg= <h1>Fetching problem</h1>
  return (
    <div className='w-full overflow-x-hidden'>
      
      <h1>Hello</h1>
      {loading && loadingmasg}
      {
        countries.map((country, id= uuidv4)=>{
          return <div key={id}>
            <h1>{country.name}</h1>

          </div>
        })
      }
      {error && errmasg}
    </div>
  )
}

export default App
