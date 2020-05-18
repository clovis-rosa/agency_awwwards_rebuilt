import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import IntroOverlay from '../components/IntroOverlay'
import Banner from '../components/Banner'
import Cases from '../components/Cases'


// On load Timeline - GSAP
const tl = gsap.timeline()

const homeAnimation = (completeAnimation) => {

  tl.from('.line span', 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    }).to('.intro-overlay', 0, { css: { display: 'none' } })
    .from('.case-image img', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  }


  useEffect(() => {
    //On load Timeline GSAP 
    homeAnimation(completeAnimation);

  }, []);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
