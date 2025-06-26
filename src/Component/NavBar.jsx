import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Switch from './Switch';


export default function NavBar(props) {
  let moodbtn;
  const handlemoodbtn = (mood) => {
    moodbtn = mood;
    console.log(moodbtn);


  }
  return (
    <nav className={`w-full h-14 px-4 py-2 flex flex-row items-center justify-between text-white ${moodbtn === "normal" ? "bg-white" : "bg-black"}`} >


      <a href="/" className=' text-2xl font-bold '>{props.title}</a>
      <Switch Mood={handlemoodbtn} />
      <FontAwesomeIcon icon={faBars} className={`cursor-pointer w-[50px] block md:hidden`} />
    </nav>
  )
}
