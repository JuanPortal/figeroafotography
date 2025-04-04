import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Contact = () => {
  return (
    <section className='contact'>
        <div className="wrap">
            <a href="tel:+8186923392">
                <FontAwesomeIcon className='icon' icon={faPhone} /> 
                <p>(818) 692 - 3392</p>
            </a>

            <a href="https://www.instagram.com/figueroa_fotography/" target='_blank'>
                <FontAwesomeIcon className='icon' icon={faInstagram} />
                <p>figueroa_fotography</p>
            </a>

            <a href="mailto:frankie@ish.com">
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                <p>frankie@ish.com</p>
            </a>
        </div>
    </section>
  )
}
