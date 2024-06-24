import React from "react";
import "../Styling/Header.css";
import "../Styling/CV.css";

const CV = () => {
  return (
    <div className="section cv">
      <div className="title">
        <h2>My Curriculum Vitae</h2>
      </div>

      <div className="myCV">
        <div className="left">
          <h3>Education</h3>
          <div className="education">
            <ul>
              <li>
                <h4>
                  National Certificate: IT Systems Developer NQF5 - Full Stack
                  Web and Software Developer
                </h4>
                <div className="vertical-line"></div>
                <div className="education-info">
                  <p>Academic Institute Of Excellence</p>
                  <p>Feb 2022 - Feb 2024</p>
                </div>
              </li>
              <li>
                <h4>Data Analysis</h4>
                <div className="vertical-line"></div>
                <div className="education-info">
                  <p>University Of Cape Town</p>
                  <p>Sep 2020 - Jan 2021</p>
                </div>
              </li>
              <li>
                <h4>Search Engine Optimization</h4>
                <div className="vertical-line"></div>
                <div className="education-info">
                  <p>University Of Cape Town</p>
                  <p>Sep 2020 - Jan 2021</p>
                </div>
              </li>
            </ul>
          </div>

          <h3>Skills</h3>
          <p>JavaScript</p>
          <p>HTML5</p>
          <p>CSS</p>
          <p>Java</p>
          <p>MySQL</p>
          <p>Digital Literacy</p>
          <p>CopyWriting</p>
          <p>Database Development</p>
          <p>Search Engine Optimization</p>
          <p>Data Analysis</p>
        </div>
        <div className="right">
          <h3>Summary</h3>
          <div className="line"></div>
          <p>
            Passionate and motivated junior developer with extensive knowledge
            of Javascript, MySQL and Reactjs. I am skilled in Database
            development, Website design, programming and software systems.
          </p>
          <h3>Work Experiance</h3>
          <div className="line"></div>
          <h4>Technical SEO/Writing</h4>
          <h5>April 2021 - Dec 2021</h5>
          <ul>
            <li>
              writing various types of blog posts, newsletters, company
              descriptions, marketing profiles and social media intros.
            </li>
            <li>proofreading and editing copy from other writers.</li>
          </ul>
          <h4>Sheet Metal Op/Health and Safety Rep.</h4>
          <h5>Nov 2018 - Dec 2020</h5>
          <ul>
            <li>
              To participate in HIRA (Hazard Identification and Risk
              Assessment).
            </li>
            <li>Give feedback of safety minutes to the team onsite.</li>
            <li>Installing the cladding on the live pipeline with lagging</li>
            <li>Reading Technical Drawings</li>
            <li>Liaise with OPS for any critical work.</li>
          </ul>

          <h3>References</h3>
          <div className="line"></div>
          <p>References avaliable upon request.</p>
        </div>
      </div>
    </div>
  );
};

export default CV;
