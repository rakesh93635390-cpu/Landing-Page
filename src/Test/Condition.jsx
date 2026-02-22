import React, { useState } from 'react'


const Condition=()=>{


let[item,setitem]=useState([
    {id:1,lable:'Python'},
     {id:2,lable:'C++'},
      {id:3,lable:'Java'}
])
    return(
        <div>
            <h1>{item.lable}</h1>
            <ul>
                {
                    item.map((item)=>{
                       return(
                        <li key={item.id}>
                            {item.lable}
                        </li>
                       )
                    })
                }
            </ul>
        </div>
    )
}
export default Condition;



