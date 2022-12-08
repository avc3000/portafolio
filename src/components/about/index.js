import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../animatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faReact, faJsSquare, faGitAlt, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

function About() {
  const [letterClass, setLetterClass] = useState('text_animate');

  useEffect(() => {
    const time = () => {
      setTimeout(() => {
        setLetterClass('text_animate_hover');
      }, 3000);
    };

    time();
  }, []);

  return (
    <>
      <div className='container about_page'>
        <div className='text_zone'>
          <h1><AnimatedLetters letterClass={letterClass} strArray={['S','o','b','r','e',' ','m','i']} idx={15} /></h1>
          <p>
            Soy un profesional apasionado con la tecnología, actualmente desarrollo tecnología como frontend (Angular, React) y backend (c#).
          </p>
          <p>
            Por naturaleza curioso por resolver problemas de TI, mejorar la automatización de procesos y ayudar a mejorar la experiencia de usuario.
          </p>
          <p>
            Me gusta investigar y ayudar con los fix a mis compañeros de trabajo, proponer soluciones técnicas para los bugs del software.
          </p>
          <p>
            Como ingeniero informático, trabajo muy bien bajo presión y me centro en el problema hasta hallar las causas y deducir las posibles soluciones.
          </p>
        </div>
        <div className='stage_cube_cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About;