import React, { useState } from 'react';
import slide1 from '../image/website-template-1.jpg';
import slide2  from '../image/website-templates-2.jpg';
import slide3 from '../image/website-template-3.png';
import slide4 from '../image/website-template-4.png';



const WebPage = () => {

    let [show,setShow]=useState(false)
   
    let click=()=>{
        setShow(true)
    }
    let close=()=>{
        setShow(false)
    }
    
  return (
   <div>
        <div className='Web-page'>
           <div>
            <h3 className='Web-title'>Career Map Enrollment</h3>
           </div>
    {/* Sliders */}
           <div className='Image-container'>
                     <div>
                         <img src={slide1} alt='Waite'></img>
                     </div>
                     <div className='image image2'>
                         <img src={slide2} alt='Waite'></img>
                     </div>
                     <div className='image image3'>
                       <img src={slide3} alt='Waite'></img>
                    </div>
                     <div className='image image3'>
                       <img src={slide4} alt='Waite'></img>
                    </div>
                   </div> 
                   {/* Information */}
                 {show && (
     <div className='Instruction'>
                    <h3>Get Start</h3>
                    <button className='Web-close' onClick={close}>X</button>
                    <h4 className='Instruction-in'>🎓Instruction</h4>
                         <p> 👩‍💻Start your journey by choose a career path and follow the learninig roadmap.
                            Build skill gradually and track your progress!</p>
                             <p>Youtube link:</p>                        
                        {/* Table */}
    
                                     <div className='Web-Timetable'>
                        <h4 className='web-table-name'>Path Table</h4>
        <table>
            <tr>
                <th>Level</th>
                <th>Skill</th>
                <th>What You Learn</th>
                <th>Duration</th>
            </tr>
            <tr>
                <td>Beginner</td>
                <td>Computer Basics</td>
                <td>How web works, browsers,internet</td>
                <td>0.5 month</td>
            </tr>
             <tr>
                <td>Beginner</td>
                <td>HTML</td>
                <td>Page structure,tags,forms</td>
                <td>1 month</td>
            </tr> <tr>
                <td>Beginner</td>
                <td>CSS</td>
                <td>Styling,Flexbox,Grid,responsive</td>
                <td>1 month</td>
            </tr> <tr>
                <td>Beginner</td>
                <td>Javascript</td>
                <td>Variable,loops,functions</td>
                <td>1.5 months</td>
            </tr> <tr>
                <td>Beginner</td>
                <td>Git & GitHub</td>
                <td>Version control</td>
                <td>0.5 month</td>
            </tr>
            <tr>
                <td>Intermediate</td>
                <td>Advanced Javascript</td>
                <td>ES6+,DOM,async/await</td>
                <td>0.5 month</td>
            </tr>
             <tr>
                <td>Intermediate</td>
                <td>Frontend Framework</td>
                <td>React.js(components hooks)</td>
                <td>2 months</td>
            </tr> <tr>
                <td>Intermediate</td>
                <td>UI Framework</td>
                <td>Tailwind/Bootstrap</td>
                <td>0.5 month</td>
            </tr> <tr>
                <td>Intermediate</td>
                <td>Backend Basics</td>
                <td>Node.js,Express.js</td>
                <td>1.5 months</td>
            </tr> <tr>
                <td>Intermediate</td>
                <td>Database</td>
                <td>MogoDB/PostgreSQL</td>
                <td>1 month</td>
            </tr>
            <tr>
                <td>Advanced</td>
                <td>Full-Stack Projects</td>
                <td>2-3 real-world projects</td>
                <td>1.5 months</td>
            </tr>
            <tr>
                <td>Advanced</td>
                <td>Testing</td>
                <td>Basic testing,debugging</td>
                <td>0.5 month</td>
            </tr>
            <tr>
                <td>Advanced</td>
                <td>Deployment</td>
                <td>Netlify,Vercel,AWS</td>
                <td>0.5 monyh</td>
            </tr><tr>
                <td>Advanced</td>
                <td>Final Project</td>
                <td>Production-ready web app</td>
                <td>1 month</td>
            </tr>
        </table>
                    </div>
                        </div>
    
    )}
                <button className='WebClik-me' onClick={click}>Get Start</button>
    
                   </div>
        </div>
        
  )
}

export default WebPage


