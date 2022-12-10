import React from 'react'
import './style.scss'
import img from '../../assets/hotel1.jpg'

const DesignCard = () => {
  return (
    <div className='design_card'>
        <div className='img_side'>
            <img src={img} alt='' />
        </div>
        <div className='details_side'>
            <h3>Blue Le Ciel Hotel</h3>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <button>
                read more
            </button>
        </div>
    </div>
  )
}

export default DesignCard