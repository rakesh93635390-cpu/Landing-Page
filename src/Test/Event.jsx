import React, { useState } from 'react'

const Event = () => {

let[items,setItems]=useState([])

let[input,setInput]=useState('')

let handleAdd=()=>{
  if(input ==='')return
  setInput(...items,input);
  console.log(items)
  // setInput("");
  
  
}

  return (
    <div>
      <h1>Event</h1>
      <input placeholder='Enter item'
      value={input}
      onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>

<ol>
  {items.map((items)=>{
    <li key={items}>{items}</li>
  })}
</ol>
    </div>
  )
}

export default Event