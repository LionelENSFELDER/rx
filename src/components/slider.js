import React from 'react'

export default function Slider (props) {
  return (
    <div id={props.id} className='carousel slide' data-bs-ride='carousel' data-bs-interval='3000' data-bs-pause='false'>
      <div className='carousel-inner'>
        {props.slides.map(slide => {
          if (props.slides.indexOf(slide) === 0) {
            return (
              <div className='carousel-item featured-carousel-item active' key={slide} style={{ backgroundImage: `url(${slide})` }}>
                {/* <img src={slide} className='img-fluid' alt='slide' /> */}
              </div>
            )
          } else {
            return (
              <div className='carousel-item featured-carousel-item' key={slide} style={{ backgroundImage: `url(${slide})` }}>
                {/* <img src={slide} className='d-block w-100' alt='' /> */}
              </div>
            )
          }
        })}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target={'#' + props.id} data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target={'#' + props.id} data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
