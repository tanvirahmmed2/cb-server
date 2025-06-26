import React from 'react'
import NavBar from './Component/NavBar'
import ToastMasg from './Component/ToastMasg'
import FetchData from './Component/Test/FetchData'
function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <NavBar title="WebPage" />
     <FetchData/>
    </div>
  )
}

export default App
