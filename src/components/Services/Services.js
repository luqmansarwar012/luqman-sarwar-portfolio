import React from 'react'
import '../Services/Services.css'
const Services = () => {
  return (
    <>
      <div className="style__div">
            
            </div>
    <div id='services'>
      <div className="container">
        <h1 className='services__title'>Where My <em>Priorities</em> Lie</h1>
        <div className="services__list">
            <div>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <h2>Optimized Design</h2>
                <p>I intend to deliever perfect websites with responsive design to make user experience much better.</p>
            </div>
            <div>
                <i className="fa-solid fa-code"></i>
                <h2>Organized & Clean Code</h2>
                <p>I try my level best to keep the code clean so that it can be understood easily by other people without giving any headaches.</p>
            </div>
            <div>
                <i className="fa-solid fa-medal"></i>
            
                <h2>Focus On Quality</h2>
                <p>Maintaining quality is very essential part of project so that's exactly what I strive for. </p>
            </div>
            <div>
                <i className="fa-solid fa-calendar-day"></i>
                <h2>Consistent Till The End</h2>
                <p>No matter what, I always find the right motivation to keep me going without compromising any of my priorities.</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
