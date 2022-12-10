import React from 'react'
import './style.scss'


const SplashScreen = () => {
  return (
    <div className='splash_screen'>
      <video autoPlay loop muted playsInline height={"100%"}  className='back_video'>
         <source src='images/splash.mp4' type='video/mp4'/>
      </video>
      <div className='overlay'>
        <div className='content'>
          <div className='logo'>
            <img src="images/logo.png" alt='' />
            <h1>eagles resort</h1>
          </div>
          <div className='lang_btns'>
            <button className='lang_btn'>english</button>
            <button className='lang_btn'>عربي</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen