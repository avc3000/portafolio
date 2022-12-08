import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../animatedLetters';
import Logo from './logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text_animate');
  const nameArray = [' ','A','n','t','o','n','y'];
  const jobArray = [' ','F','u','l','l',' ','S','t','a','c','k',' ','D','e','v','e','l','o','p','e','r','.'];

  useEffect(() => {
    const time = () => {
      setTimeout(() => {
        setLetterClass('text_animate_hover');
      }, 4000);
    };

    time();
  }, []);  

  return (
    <>
      <div className='container home_page'>
        <div className='text_zone'>
          <h1>Hola, <br />Soy
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={14} />
          </h1>
          <h2>Frontend Developer / Backend Developer / DevOps Middle</h2>
          <Link to='/contact' className='flat_button'>CONTAC ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home;