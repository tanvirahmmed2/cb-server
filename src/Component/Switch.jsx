import React, {useState} from 'react'

export default function Switch(props) {
    let [mood, setMood]= useState("normal")
    const handleclick=()=>{
        setMood(mood==="normal"? "dark": "normal");
        console.log(mood);
        
    }
    props.Mood(mood)
  return (
    <div>
      <button className={`w-[120px] cursor-pointer border-2 p-2  ${mood==="normal"? "bg-black": "bg-white"} ${mood==="normal"? "text-white": "text-black"} rounded-2xl`} onClick={handleclick}>Mood: {mood}</button>
    </div>
  )
}
