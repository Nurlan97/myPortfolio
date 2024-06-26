import React from "react";
import "./experience.css";
import Services from "../services/Services";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="experience-services__container">
      <section id="experience">
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </div>

              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </div>

              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SCSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>
              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>

              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>TypeScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>
              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </div>

              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MobX</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>

              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>
              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Redux</h4>
                  <small className="text-light">Basic</small>
                </div>
              </div>
              <div className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Git</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>
            </div>
          </div>

          {/*END OF FRONTEND */}

          {/* <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div> */}
        </div>
      </section>
      <Services />
    </div>
  );
};

export default Experience;
