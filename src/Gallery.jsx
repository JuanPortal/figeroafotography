import React from 'react'

export const Gallery = () => {
  return (
    <section className='gallery'>
      <div className="wrap">
        <div className="roll">
          <img src="src/assets/img1.png" title="image #1" alt='image #1' loading='lazy'/>
          <img src="src/assets/img2.png" title="image #2" alt='image #2' loading='lazy'/>
          <img src="src/assets/img3.png" title="image #3" alt='image #3' loading='lazy'/>
        </div>

        <div className="roll">
          <img src="src/assets/img4.png" title="image #4" alt='image #4' loading='lazy'/>
          <img src="src/assets/img5.png" title="image #5" alt='image #5' loading='lazy'/>
          <img src="src/assets/img6.png" title="image #6" alt='image #6' loading='lazy'/>
        </div>
      </div>
    </section>
    
  )
}
