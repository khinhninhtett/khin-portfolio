import './App.css';
import React from 'react';
import { useEffect } from 'react';
import Navbar  from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Skill from './component/skill';
import Work from './component/work';
import Contact from './component/contact';
import Footer from './component/footer';
import ScrollReveal from 'scrollreveal';


function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
      reset: true,
    });
const timer = setTimeout(() => {
     sr.reveal(`.nav__menu`, { scale: 0.1, origin: "bottom", distance: "200px", delay: 50 });
  sr.reveal(`.home__data`);
  sr.reveal(`.home__handle`, { delay: 50 });
  sr.reveal(`.home__social, .home__title, .home__img, .home__button, .home__subtitle`, { origin: "bottom", delay: 50 });
  sr.reveal(`.about__img`, { origin: "left", scale: 0.9, distance: "20px", delay: 50 });
  sr.reveal(`.about__data, .about__description, .about__button-contact`, { origin: "right", scale: 0.9, distance: "20px", delay: 50 });
  sr.reveal(`.skills__content`, { origin: "bottom", scale: 0.9, distance: "20px", delay: 50 });
  sr.reveal(`.work__card`, { origin: "bottom", scale: 0.9, distance: "20px", delay: 50 });
  sr.reveal(`.contact__info, .contact__title-info`, { origin: "left", scale: 0.9, distance: "20px", delay: 50 });
  sr.reveal(`.contact__form, .contact__title-form`, { origin: "right", scale: 0.9, distance: "20px", delay: 50 });
  sr.reveal(`.footer, .footer__container`, { origin: "bottom", scale: 0.9, distance: "20px", delay: 50 });
  }, 300); 
  }, []);

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
