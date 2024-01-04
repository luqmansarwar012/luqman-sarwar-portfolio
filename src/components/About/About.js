import React, { useState } from "react";
import "../About/About.css";
const About = () => {
  const [skills, setSkills] = useState(false);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(true);

  const skillsHandler = () => {
      setEducation(false);
      setExperience(false);
      setSkills(true);
  };
  const educationHandler = () => {
      setEducation(true);
      setExperience(false);
      setSkills(false);
  };
  const experienceHandler=()=>{
    setEducation(false);
    setExperience(true);
    setSkills(false);
  }
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="about__section">
            {/* Image */}
            <div className="about__img">
              <img src="images/luqmanSarwar.jpeg" alt="..." />
            </div>
            {/* About Details*/}
            <div className="about__details">
              <h1 className="aboutme__title">About Me</h1>
              <p>
                I consider handling things, with responsibility & proper
                planning, to be of a greater priority. I like to present my
                devotion, dedication, and commitment to achieving the goals
                despite the hurdles that come along the way.
              </p>
              {/* About Additionals */}
              <div className="about__extras">
              <p
                  className={`extras__headings ${
                    experience ? "active__extras" : ""
                  }`}
                  onClick={experienceHandler}
                >
                  Experience
                </p>
                <p
                  className={`extras__headings ${
                    skills ? "active__extras" : ""
                  }`}
                  onClick={skillsHandler}
                >
                  Skills
                </p>
                <p
                  className={`extras__headings ${
                    education ? "active__extras" : ""
                  }`}
                  onClick={educationHandler}
                >
                  Education
                </p>
              </div>
              <div
                className={`extras__content ${
                  experience ? "active__content" : " "
                }`}
              >
                <ul>
                  <li>
                    <span>Backend Developer</span>
                    <br />
                    O'Cyber
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      |{" "}
                    </span>
                    Lahore, Pakistan
                    <br/>
                    May, 2023 - Jan, 2024
                  </li>
                  <li>
                    <span>Web Developer Intern</span>
                    <br />
                    Whitebox Tech.
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      |{" "}
                    </span>
                    Lahore, Pakistan
                    <br/>
                    Feb, 2023 - April, 2023
                  </li>
                </ul>
              </div>
              <div
                className={`extras__content ${
                  skills ? "active__content" : " "
                }`}
              >
                <ul>
                  <li>
                    <span>Backend Development</span>
                    <br />
                    Skillful
                  </li>
                  <li>
                    <span>Frontend Development</span>
                    <br />
                    Beginner
                  </li>
                </ul>
              </div>
              <div
                className={`extras__content ${
                  education ? "active__content" : " "
                }`}
              >
                <ul>
                  <li>
                    <span>BS Software Engineering</span>
                    <br />
                    University Of Gujrat
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      /{" "}
                    </span>
                    2018-2022
                  </li>
                  <li>
                    <span>Intermediate in Computer Science</span>
                    <br />
                    Army Public College Sarai Alamgir
                  </li>
                  <li>
                    <span>Matriculation </span>
                    <br />
                    Army Public School College Sarai Alamgir
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      /{" "}
                    </span>
                    2014-2016
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
