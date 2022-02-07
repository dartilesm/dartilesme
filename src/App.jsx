import { Container, globalCss } from '@nextui-org/react';
import styles from './app.module.css';
import AboutMe from './containers/AboutMe';
import Header from './components/Header';
import MyBeginnings from './containers/MyBeginnings';
import Presentation from './containers/Presentation';
import Projects from './containers/Projects';
import Technologies from './containers/Technologies';
import MainBackground from './containers/MainBackground';
import { useEffect, useRef, useState } from 'react';
import useScrollPosition from './hooks/useScrollPosition';

const globalStyles = globalCss({
  '*': {
    fontFamily: '$spaceGrotesk'
  },
  body: {
    backgroundColor: '#020c20'
  }
})

const App = () => {
  const backgroundRef = useRef({})
  const [isOnScrollPosition, updateScrollPosition] = useScrollPosition({ scrollPos: backgroundRef.current?.offsetTop })
  globalStyles()

  useEffect(() => {
    updateScrollPosition(backgroundRef.current?.offsetTop)
  }, [backgroundRef.current.offsetTop])

  return (
    <>
      <Header />
      <Container className={styles.mainContent}>
        <MainBackground ref={backgroundRef} sticky={isOnScrollPosition} />
        <Presentation />
        <AboutMe />
        <Projects />
        <MyBeginnings />
        <Technologies />
      </Container>
    </>
  )
}

export default App;
