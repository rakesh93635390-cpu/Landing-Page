import React from 'react'

const Items=({User})=>{
    // console.log(props);
    // let{User}=props
    console.log(User);
    return(
<div>
    <p>{User?.Age}</p>
</div>
    )
}
export default Items;