import React from 'react'
import NavBar from './Component/NavBar'
import DataFetch from './Component/DataFetch'
function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <NavBar title="WebPage" />
      <DataFetch />
    </div>
  )
}

export default App
