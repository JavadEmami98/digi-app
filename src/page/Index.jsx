import React from 'react';
import "./first.css";

function Index() {
  return (
    <div>
        <img className='header-pic' src="/image/header.jpg" alt="" loading='lazy'/>
        <div className='logo-line'>
            <img className='logo' src="/image/logo.svg" alt="" loading='lazy'/>
            <input className='input' type="text" placeholder='جستجو'/>
            <div className='head-left'>

            </div>
        </div>
        
    </div>
  )
}

export default Index