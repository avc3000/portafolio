import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from './../animatedLetters/index';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './index.scss';

function Contact() {
  const [letterClass, setLetterClass] = useState('text_animate');
  const refForm = useRef();

  useEffect(() => {
    const time = () => {
      setTimeout(() => {
        setLetterClass('text_animate_hover');
      }, 3000);
    };

    time();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', '', refForm.current, '').then(() => {
      alert('Mensaje enviado correctamente.');
      window.location.reload(false);
    },
    () => {
      alert('Falló el envio del mensaje. Intente nuevamente por favor.');
    });
  }

  return (
    <>
      <div className='container contact_page'>
        <div className='text_zone'>
          <h1><AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t','a','m','e']} idx={15} /></h1>
          <p>
            Siempre estoy intersado en las oportunidades para nuevos proyectos independientes. Puedo responder todas tus consultas sobre el mundo de TI, escribeme para contactarnos.
          </p>
          <div className='contact_form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'><input type='text' name='nombre' placeholder='Nombre' required /></li>
                <li className='half'><input type='email' name='email' placeholder='Email' required /></li>
                <li><input type='text' name='titulo' placeholder='Titulo' required /></li>
                <li><textarea placeholder='mensaje' name='mensaje' required /></li>
                <li><input className='flat_button' type='submit' value='ENVIAR' /></li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info_map'>
          Antony Villar
          <br />
          Ingeniero Infomático
          <br />
          Lima, Perú - 2022
          <br />
          <span>freelancer_antony@gmail.com</span>
        </div>
        <div className='map_wrap'>
          <MapContainer center={[-12.04318, -77.02824]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-12.04318, -77.02824]}>
              <Popup>Antony vive aquí, vayamos a tomar una taza de café.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact;