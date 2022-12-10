import React from 'react'
import './style.scss'

import cover from '../../assets/homepagecover.jpg'

const Header = () => {
  return (
    <div className='header'>
        <img src={cover} alt=''/>
    </div>
  )
}

export default Header