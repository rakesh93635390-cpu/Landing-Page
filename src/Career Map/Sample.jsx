import React, { useState } from 'react'

const Sample = () => {

    const [userI,setUserI]=useState("")

      const Courses=[
    {id:1,Name:"All",category:"all"},
    {id:2,Name:"Web",category:"web"},
    {id:3,Name:"App",category:"app"},
    {id:4,Name:"AI",category:"ai"}
  ]

  const filterData=Courses.filter((item)=>{
   return item.Name.toLocaleLowerCase().includes(userI.toLocaleLowerCase())

  })


  return (
    <div>
<input 

onChange={(e)=>setUserI(e.target.value)}
type='text' 
placeholder='Enter find value'/>

<div>
    {
        filterData.map((item)=>{
            return <h3>{item.Name}</h3>
        })
    }
</div>
    </div>

  )
}

export default Sample