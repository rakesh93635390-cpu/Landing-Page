import React, { useState } from 'react';
import slide1 from '../image/Photos/Ai-1.webp';
import slide2 from '../image/Photos/Ai-2.jpg';
import slide3 from '../image/Photos/Ai-3.jpg';
import slide4 from '../image/Photos/Ai-4.jpeg';



const AIml = () => {

     let [show,setShow]=useState(false)
           
            let click=()=>{
                setShow(true)
            }
 let close=()=>{
        setShow(false)
    }

  return (
   <div>
        <div className='AI-page'>
           <div>
            <h3 className='AI-title'>Career Map Enrollment</h3>
           </div>
    {/* Sliders */}
           <div className='Image-container'>
                     <div>
                         <img src={slide1} width={400}height={250} alt='Waite'></img>
                     </div>
                     <div className='image image2'>
                         <img src={slide2} width={400}height={250} alt='Waite'></img>
                     </div>
                     <div className='image image3'>
                       <img src={slide3} alt='Waite'></img>
                    </div>
                     <div className='image image3'>
                       <img src={slide4} width={400}height={250} alt='Waite'></img>
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
    
                                     <div className='AI-Timetable'>
                        <h4 className='AI-table-name'>Path Table</h4>
        <table>
            <tr>
                <th>Level</th>
                <th>Skill</th>
                <th>Whate You Learn</th>
                <th>Duration</th>
            </tr>
            <tr>
                <td>Beginner</td>
                <td>Programing Basic</td>
                <td>Python syntex,loops,function</td>
                <td>1 month</td>
            </tr>
             <tr>
                <td>Beginner</td>
                <td>Python for Data</td>
                <td>Numpy,Pandas,Matplotlib</td>
                <td>1.5 months</td>
            </tr> <tr>
                <td>Beginner</td>
                <td>Math for ML</td>
                <td>Linear algebra,probability,stats</td>
                <td>1 month</td>
            </tr>
            <tr>
                <td>Intermediate</td>
                <td>Data Preprocessing</td>
                <td>Cleaning,handling missing data</td>
                <td>1 month</td>
            </tr>
             <tr>
                <td>Intermediate</td>
                <td>Machine Learning Basics</td>
                <td>Supervised & unsupervised ML</td>
                <td>1.5 months</td>
            </tr> <tr>
                <td>Intermediate</td>
                <td>ML Algorithms</td>
                <td>Regression,SVM,KNN,Trees</td>
                <td>1.5 months</td>
            </tr> <tr>
                <td>Intermediate</td>
                <td>Model Evaluation</td>
                <td>Accuracy,precision,recall</td>
                <td>0.5 month</td>
            </tr> <tr>
                <td>Intermediate</td>
                <td>Mini ML project</td>
                <td>2-3 real datasets</td>
                <td>1 month</td>
            </tr>
            <tr>
                <td>Advanced</td>
                <td>Deep learning Basics</td>
                <td>Neural Networks,backprop</td>
                <td> 1 month</td>
            </tr>
             <tr>
                <td>Advanced</td>
                <td>Deep learning Tools</td>
                <td>TensorFlow/Python</td>
                <td>1 month</td>
            </tr> <tr>
                <td>Advanced</td>
                <td>Specialzation</td>
                <td>NLP/Computer Vision/GenAI</td>
                <td>1 month</td>
            </tr> <tr>
                <td>Advanced</td>
                <td>Model Deployment</td>
                <td>Flask,FastAPI,Streamlit</td>
                <td>1 month</td>
            </tr> <tr>
                <td>Advanced</td>
                <td>Final Project</td>
                <td>End-to-end AI/ML system</td>
                <td>1 month</td>
            </tr>
        </table>
                    </div>
                        </div>
    
    )}
                <button className='AIClik-me' onClick={click}>Get Start</button>
    
                   </div>
        </div>
  )
}

export default AIml