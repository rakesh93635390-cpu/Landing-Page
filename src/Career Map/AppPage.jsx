import React, { useState } from 'react';
import slide1 from '../image/Photos/App-1.jpg';
import slide2 from '../image/Photos/App-2.jpg';
import slide3 from '../image/Photos/App-3.jpg';
import slide4 from '../image/Photos/App-4.jpeg';

const AppPage = () => {

     let [show,setShow]=useState(false)
       
        let click=()=>{
            setShow(true)
        }
        let close=()=>{
        setShow(false)
    }
  return (
    
     <div>
    <div className='App-page'>
       <div>
        <h3 className='App-title'>Career Map Enrollment</h3>
       </div>
{/* Sliders */}
       <div className='Image-container'>
                 <div> 
                     <img src={slide1} width={400} height={250}alt='Waite'></img>
                 </div>
                 <div className='image image2'>
                     <img src={slide2} width={400} height={250} alt='Waite'></img>
                 </div>
                 <div className='image image3'>
                   <img src={slide3} width={400} height={250} alt='Waite'></img>
                </div>
                 <div className='image image3'>
                   <img src={slide4} width={400} height={250} alt='Waite'></img>
                </div>
               </div> 
               {/* Information */}
             {show && (
 <div className='Instruction'>
                <h3>Get Start</h3>
         <button className='App-close' onClick={close}>X</button>
                <h4 className='Instruction-in'>🎓Instruction</h4>
                     <p> 👩‍💻Start your journey by choose a career path and follow the learninig roadmap.
                        Build skill gradually and track your progress!</p>
                         <p>Youtube link:</p>
                    
                    {/* Table */}

                                 <div className='App-Timetable'>
                    <h4 className='App-table-name'>Path Table</h4>
    <table>
        <tr>
            <th>Level</th>
            <th>Skill</th>
            <th>What You Learn</th>
            <th>Duration</th>
        </tr>
        <tr>
            <td>Beginner</td>
            <td>Programing Basic</td>
            <td>Variable,loops,function</td>
            <td>1 month</td>
        </tr>
        <tr>
            <td>Beginner</td>
            <td>Programing Language</td>
            <td>Kotlin(Android)/Swift(iOS)</td>
            <td>2 months</td>
        </tr>
        <tr>
            <td>Beginner</td>
            <td>UI Design Basic</td>
            <td>Layouts,buttons,navigation</td>
            <td>1 month</td>
        </tr>
         <tr>
            <td>Beginner</td>
            <td>Git & GitHub</td>
            <td>Version Controle basics</td>
            <td>0.5 month</td>
        </tr>
          <tr>
            <td>Intermediate</td>
            <td>App Architecture</td>
            <td>MVC/MVVM</td>
            <td>1 month</td>
        </tr>  <tr>
            <td>Intermediate</td>
            <td>Api & Networking</td>
            <td>REST APIs,JSON</td>
            <td>1 month</td>
        </tr>  <tr>
            <td>Intermediate</td>
            <td>Database</td>
            <td>SQLLite/Room/Firebase</td>
            <td>1 month</td>
        </tr>  <tr>
            <td>Intermediate</td>
            <td>Debugging</td>
            <td>Fixing error,logs</td>
            <td>0.5 month</td>
        </tr>  <tr>
            <td>Intermediate</td>
            <td>Mini Project</td>
            <td>2-3 sample apps</td>
            <td>1 month</td>
        </tr>  <tr>
            <td>Advanced</td>
            <td>Performance Optimization</td>
            <td>Speed,memory management</td>
            <td>0.5 month</td>
        </tr>  <tr>
            <td>Advanced</td>
            <td>Security</td>
            <td>Athentication,data protection</td>
            <td>0.5 month</td>
        </tr>  <tr>
            <td>Advanced</td>
            <td>Testing</td>
            <td>Unit testting, UI testing</td>
            <td>0.5 month</td>
        </tr> 
          <tr>
            <td>Advanced</td>
            <td>App Publishing</td>
            <td>Play store/App store</td>
            <td>0.5 month</td>
        </tr> 
    </table>
                </div>
                    </div>

)}
            <button className='AppClik-me' onClick={click}>Get Start</button>

               </div>
    </div>   
  )
}

export default AppPage

   