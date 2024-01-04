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
                <i className="fa-solid fa-code"></i>
                <h2>Organized & Clean Code</h2>
                <p>I am committed to writing clean code to enhance readability for other developers.</p>
            </div>
            <div>
                <i className="fa-solid fa-medal"></i>
            
                <h2>Quality Focused</h2>
                <p>Maintaining project quality is an essential part of what I strive for.</p>
            </div>
            <div>
                <i className="fa-solid fa-calendar-day"></i>
                <h2>Consistent till end</h2>
                <p>Regardless of the circumstances, I find the motivation to persevere.</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
