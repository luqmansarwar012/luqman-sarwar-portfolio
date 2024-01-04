import React from 'react'
import '../Portfolio/Portfolio.css'
const Portfolio = () => {
  return (
    <>
        <div className="style__div">
            
        </div>
        <div id="portfolio">
            <div className="container">
                <h1 className="portfolio__title">Portfolio</h1>
                <div className="portfolio__projects">
                    <div className="project">
                        <img src='images/eNotes.jpg' alt='...'/>
                        <div className="layer">
                            <h2>eNotes App</h2>
                            <p>The app allows you to create and manage notes.</p>
                            <p>The app is devloped using MERN stack.</p>
                            {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
                        </div>
                    </div>
                    <div className="project">
                        <img src='images/propsStore.jpg' alt='...'/>
                        <div className="layer">
                            <h2>Props' Store</h2>
                            <p>Props' Store is a web app for real estate.</p>
                            <p>The app is devloped using MERN stack.</p>
                            {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
                        </div>
                    </div>
                    <div className="project">
                        <img src='images/inProgress.png' alt='...'/>
                        <div className="layer">
                            <h2>In Progress</h2>
                            <p>Will be updated soon.</p>
                            {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
                        </div>
                    </div>
                </div>
                <a className="btn" href='#none'>View More</a>
            </div>
        </div>
    </>
  )
}

export default Portfolio
