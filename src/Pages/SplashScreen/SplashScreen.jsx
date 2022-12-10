import React from 'react'
import './style.scss'
import video from "../../assets/splash.mp4"
import logo from '../../assets/logo.png'
const SplashScreen = () => {
  return (
    <div className='splash_screen'>
      <video autoPlay loop muted playsInline height={"100%"}  className='back_video'>
         <source src={video} type='video/mp4'/>
      </video>
      <div className='overlay'>
        <div className='content'>
          <div className='logo'>
            <img src={logo} alt='' />
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