import React, {useEffect, useRef} from 'react';

export default function Slider(props){

  return(
    <div id={props.id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {props.slides.map(slide =>{
            if(props.slides.indexOf(slide) == 0){
              return(
                <div className="carousel-item active" key={slide} style={{backgroundImage: 'url(' + { slide } + ')', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                  {/* <img src={slide} className="img-fluid" alt="slide" /> */}
                </div>
              )
            }else{
              return(
                <div className="carousel-item" key={slide}>
                  <img src={slide} className="img-fluid" alt="slide" />
                </div>
              )
            }
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={'#'+props.id} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={'#'+props.id} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

{/* add active for the first slide */}