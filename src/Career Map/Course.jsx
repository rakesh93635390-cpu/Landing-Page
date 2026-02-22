import React, { useEffect, useState,useMemo } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom'
import FrontendPdf from '../image/front-end-developer-course-syllabus.pdf';
import AppPdf from '../image/MOBILE APPLICATION DEVELOPMENT.pdf';
import AIMLPdf from '../image/AIML.pdf';
import { ProgressBar } from 'react-bootstrap';
import { object } from 'yup';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';



const Course = () => {
  let navigate=useNavigate()
// Web-page
  

  const Courses=[
    {id:1,Name:"Web Development",category:"Web",pdf:FrontendPdf,src:"https://www.youtube.com/embed/GxmfcnU3feo"},
    {id:2,Name:"App Development",category:"Moboil App Development",pdf:AppPdf,src:"https://www.youtube.com/embed/yye7rSsiV6k"},
    {id:3,Name:"Ai&ML",category:"Aritificial Intelligence & Machine learning",pdf:AIMLPdf,src:"https://www.youtube.com/embed/JAWSqX2fBvQ"},
  
  ]
  let [showpdf,setShowpdf]=useState(null)
 
  let EnrollKnow=(item)=>{
    if (item.category === "Web"){
     navigate("/WebPage")
     

    }
    else if (item.category === "Moboil App Development"){
       navigate("/AppPage")

    }
    else if (item.category === "Aritificial Intelligence & Machine learning"){
        navigate("/AIML")

    }
  }

  // Catagory

  let [search,setSearch]=useState("")
  
  const filtercourse=  useMemo(()=>{
    return Courses.filter((item)=>
     item.category.toLowerCase().includes(search.toLowerCase().trim())
  )
  },[search])
  // close Pdf
const close = () =>{
  setShowpdf()
}
// progress

 
const handelSyllabus=(item)=>{
setShowpdf(item.pdf)
upProgress(item.id,"syllabus")
}

// const [course,setCourse]=useState(Courses.reduce((acc,c)=>{
//   acc[c.id]={
//    video:false,
//   Enroll:false,
//   syllabus:false 
//   }
//   return acc
// },{})
// )
const [course,setCourse]=useState({
  1:{video:false,
  Enroll:false,
  syllabus:false },
   2:{ video:false,
  Enroll:false,
  syllabus:false },
   3:{ video:false,
  Enroll:false,
  syllabus:false }
})
  

// const [progress,setProgress]=useState({})


const upProgress=(id,field)=>{
setCourse(prev =>({
  ...prev,
  [id]:{
    ...prev[id],
    [field]:true
  },
}))
}

const CalculatePro=(id)=>{
const cou=course[id]
return(
  (cou.video ? 50:0)+
(cou.Enroll ? 25:0)+
(cou.syllabus? 25:0)
)
}

// useEffect(()=>{
//   const nweprocress={}
//   Object.keys(course).forEach((id)=>{
//  const cou=course[id]
// const total=
//   (cou.video ? 50:0)+
// (cou.Enroll ? 25:0)+
// (cou.syllabus? 25:0)

// nweprocress[id]=total;
//   })
//  setProgress(nweprocress)
// },[course])


// useEffect(()=>{
//   const tag=document.createElement("script")
//   tag.src="https://www.youtube.come/iframe_api"
//   document.body.appendChild(tag)
//   window.onYouTubeIframeAPIReady=()=>{
//     Courses.forEach((item)=>{
//       new window.YT.Player(`player-${item.id}`,{
//         height:"250",
//         width:"400",
//         videoId:item.videoId,
//         event:{
//           onStateChange:(event)=>{
//             if(event.data===window.YT.PlayerState.ENDED){
//               upProgress(item.id)
//             }
//           },
//         },
//       })
//     })
//   }
// },[])

  return (
    <div className='C-main_body'>
    <div className='course-body'>
      
      <div className='course-nav'>
      <h1 className='logo-C'></h1>
      <input className='input'
       placeholder='       Search data'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
      ></input>
      <p className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass}/></p>
      </div>
      {/* Filter Data */}
      <div className='course-subBody'>
      {             
        filtercourse.map((item)=>{
          const percent=CalculatePro(item.id)
          return(
      <div className='cart-contaniner' >
      <div className='cart'>
        <h3 className='cart-title'>{item.Name}</h3>
        <p className='couch-name'>{item.category}</p>
        <iframe className='cvideo' 
        src={item.src}
        allowFullScreen controls >
        </iframe>
        <div className='Progress'>
          <div className='Progress-bar' style={{width:`${percent}%`}} ></div>
        </div>
        <p className='Progress-p'>Progress:{percent}%</p>
        <button className='Enrole-btn'onClick={()=>EnrollKnow(item)} >Enroll Know</button>
        <button className='syllabus-btn' 
        onClick={()=>handelSyllabus(item)}>
         Syllabus </button>
      </div>
      </div>)
     }) }{

     filtercourse.length === 0 && (
      <h1 className='error'>Not Found !</h1>
     )}
      </div>

<div className='Application-Pdf'>
        {showpdf && (
          <div className='course-syllabus'>
      <iframe  
          src={showpdf}     
      type='application/pdf'
      width="280" height="386"  /> 
      <button className='close' onClick={close}>X</button>
      </div>
    ) }
    </div>
    </div>
  </div>
  

 
)
}

export default Course

