import React, { useState } from 'react'
import Items from './Items';

const Props=()=>{


let [item,setitem]=useState(
   {id:1,name:"Priya",Age:23},
//    {id:2,name:"maya",Age:24},
//    {id:3,name:"kumar",Age:25}  
)

    return(
        <div>
            <Items User={item}/>
        </div>
    )
}
export default Props;