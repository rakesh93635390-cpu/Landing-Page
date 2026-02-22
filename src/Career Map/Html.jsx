import React from 'react'
import'./index.css'
import { Link , useNavigate} from 'react-router-dom';


const Html = () => {


  const navigate = useNavigate()
  
  return (
    
    <div className='WelcomeP'>
      <h1 className='logo_C'></h1>
         <h1 className='title'>Career Map</h1>
        <p className='moveLi'> CM...Career Map ...CM</p>
        <h3 className='welcome'>Welcome Career Map</h3>
        <div>
          <h4 className='heading'>Your Career Journey Starts Here!</h4>
          <h5 className='Subheading'>"Explore paths,discover your passion,and 
            build your future with confidence"</h5>
        <p className='content'><span className='CM'>Career Map</span> is your personal career guide
           designed for students like you.  Whether you're unsure about your next step ready
           to level up, we help you find the right direction - from college courses
           to real-world careers.</p>
        </div>
        <div className='signP'>
            <h1 className='sign'>Map My Career</h1>
              <button className='login' onClick={()=>{navigate("/login")}}>Login</button> 
              </div>
        
</div>
    
  )
}

export default Html