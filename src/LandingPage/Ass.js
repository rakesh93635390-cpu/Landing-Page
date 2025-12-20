import React from 'react'
import './Ass.css';

const Ass = () => {
  return (
    <div class='landing'>
        <header class='header'>
         <div class='logo'>  
            Career Map       
        </div>
        <nav class='nav' >
            <a href='#home'>Home</a>
            <a href='#features'>Features</a> 
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
        </nav>
        <button class='cta'>
            Get Started
        </button>
        </header>
        <section class='hero' id='home'>
         <h1>Plan Your Career With Clarity</h1>
         <p>Explore the right path for your future with CareerMap</p>
        <button class='cta'>Explore Now</button>
        </section>
        <footer class='footer'>
        @2025 Career Map. All rights reserved.
        </footer>

 </div>
  )
}

export default Ass