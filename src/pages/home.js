import React, { useEffect, useRef } from 'react';
import SmoothScroll from 'smooth-scroll';
import { HomeContainer } from '../containers/home';

const scroll = new SmoothScroll(null, { speed: 800 });

export default function Home() {
  const prevScroll = useRef(0);

  // Checks the direction in which the user scrolls the page and based on it causes a smooth scroll
  const checkDirection = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY >= prevScroll.current) {
      scroll.animateScroll(2000);
    } else if (currentScrollY < prevScroll.current) {
      scroll.animateScroll(0);
    }
    prevScroll.current = currentScrollY;
  };

  const scrollStartHandler = () => {
    window.removeEventListener('scroll', checkDirection);
  };

  const scrollStopHandler = () => {
    window.addEventListener('scroll', checkDirection);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkDirection);

    window.addEventListener('scrollStart', scrollStartHandler);

    window.addEventListener('scrollStop', scrollStopHandler);

    return () => {
      window.removeEventListener('scroll', checkDirection);
      window.removeEventListener('scrollStart', scrollStartHandler);
      window.removeEventListener('scrollStop', scrollStopHandler);
    };
  }, []);

  return (
    <>
      <HomeContainer />
    </>
  );
}
