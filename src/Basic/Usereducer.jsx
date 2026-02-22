import React, { useReducer } from 'react'

const Usereducer = () => {

let reducer=(state,countAction)=>{
console.log(countAction);

switch(countAction.type){
    case "Increament":
        return{count:state.count+1};
    case "dicreament":
        return{...state,count:state.count-1};
    case "Reset":
        return{...state,count:0} ; 
    default :return state;          
}
}

let[state,dispatch]= useReducer(reducer,{count:0})

  return (
    <div>
<button onClick={()=>dispatch({type:"Increament"})}>
    Increament
</button>
<button onClick={()=>dispatch({type:"dicreament"})} >
    dicreament
</button>
<button onClick={()=>dispatch({type:"Reset"})} >
 Reset
</button>
<h1>{state.count}</h1>
    </div>
  )
}

export default Usereducer