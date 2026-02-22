import React, { useEffect, useRef, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faRightFromBracket,faCircleInfo,
  faBookOpen,faHandsClapping,faShareFromSquare,faComment} 
  from '@fortawesome/free-solid-svg-icons'
import bgMusic from '../image/CM.mp3';
import reel from '../image/CM.mp4';
import one from '../image/slide-3.jpg';
import two from '../image/slide-2.jpeg';
import three from '../image/slide-1.jpg';
import four from '../image/slide-4.jpg';
import path from '../image/path.png';

import { useNavigate } from 'react-router-dom';



const Home = () => {
    let navigate=useNavigate()
  let login=()=>{
    navigate("/login")
  }
  let about=()=>{
    navigate("/About")
  }
  let course=()=>{
    navigate("/course")
  }
  let [nice,setNice]=useState(0)

  let add=()=>{
     setNice(nice+1)
  }
  return (
    <>
    <div className='page'>
    <div className='nave'>
      <h1 className='logo'></h1>
       <button className='Home'> <FontAwesomeIcon icon={faHome} />
       Home-Page</button>
       <div className='set'>
       <button className='course' onClick={course}  > <FontAwesomeIcon icon={faBookOpen}/>
       Course</button>
       <button className='about' onClick={about}  >
        <FontAwesomeIcon icon={faCircleInfo}/>
        About</button>
       <button className='logout' onClick={login} ><FontAwesomeIcon icon={faRightFromBracket}/> Logout</button>
       </div>
       <div>
        <audio  src={bgMusic} >
        </audio>
       </div>
       
    </div>

    <div>
        <div className="slide-wrapper">
            <div className="slider">
                <img alt="wait"  id="slide-1"src={one}/>
                <img alt="wait" id="slide-2" src={two}/>
                <img alt="wait"id="slide-3" src={three}/>
                <img alt="wait"id="slide-4" src={four}/>
            </div>
        </div>
       </div>
       {/* Video */}
           <div className='video-container'>
                <img alt="wait" className='video-bg'src={path}/>
        <video className='video' controls >
          <source src={reel} type='video/mp4'>
          </source>
        </video>
        <div className='icons'>
<p className='video-icon_clap'  onClick={add}><FontAwesomeIcon icon={faHandsClapping}/>
<span >{nice}</span></p>
<p className='video-icon_share'><FontAwesomeIcon icon={faShareFromSquare}/>
<span >Share</span></p>
<p className='video-icon_cm'><FontAwesomeIcon icon={faComment}/>
<span >cm</span></p>
</div>
    </div>
       {/* -----------Cart----------- */}
       <div className='cart-container-wrapper'>
       <div className='cart-container'>
        <div className='cart-nav' ><h3>Year 1</h3></div>
        <div className='cart-arror'><h3>Explore Career Paths</h3></div>
        <h4>Manual</h4>
        <ul>
          <li>1.Discover Job Roles</li>
           <li>2.Skill Building for Jobs</li>
           <li>3.Future Planning</li>
        </ul>
        <div className='cart-footer' ></div>
       </div>
        <div className='cart-container'>
        <div className='cart-nav' ><h3>Year 2</h3></div>
        <div className='cart-arror'><h3>Skill Development &  Experience</h3></div>
        <h4>Manual</h4>
        <ul>
          <li>1.Advanced Skill Building</li>
           <li>2.Courses & Certifications</li>
           <li>3.Internship/Practical Exposure</li>
        </ul>
        <div className='cart-footer' ></div>
       </div>
        <div className='cart-container'>
        <div className='cart-nav' ><h3>Year 3</h3></div>
        <div className='cart-arror-three'><h3>Career Specialization & Job Preparation </h3></div>
        <h4>Manual</h4>
        <ul>
          <li>1.Career Specialization</li>
           <li>2.Higher Studies/Advanced Training</li>
           <li>3.Job Preparation</li>
        </ul>
        <div className='cart-footer' ></div>
       </div>
       </div>
       <div className='Map_tree'>
       </div>
    </div>
      </>  
  )
}

export default Home
