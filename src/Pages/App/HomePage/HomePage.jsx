import React from 'react'
import DesignCard from '../../../Components/DesignCard/DesignCard'
import './style.scss'

const HomePage = () => {
  return (
    <div className='home_page'>
      <h2 className='home_page_title'>Hotels & Chalets</h2>
      <div className="container">
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
      </div>

    </div>
  )
}

export default HomePage