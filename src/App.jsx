import { Container } from '@nextui-org/react';
import styles from './app.module.css';
import AboutMe from './containers/AboutMe';
import Header from './components/Header';
import MyBeginnings from './containers/MyBeginnings';
import Presentation from './containers/Presentation';
import Projects from './containers/Projects';
import Technologies from './containers/Technologies';
import MainBackground from './containers/MainBackground';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [isStickyBackground, setIsStickyBackground] = useState(false)
  const backgroundRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', handleStickyBackground)
    return () => window.removeEventListener('scroll', handleStickyBackground)
  }, [])

  const handleStickyBackground = () => {
    const { current: backgroundElement } = backgroundRef
    
    const isSticky = window.scrollY >= backgroundElement.offsetTop
    
    setIsStickyBackground(isSticky)
  }

  return (
    <>
      <Header />
      <Container className={styles.mainContent}>
        <MainBackground ref={backgroundRef} sticky={isStickyBackground} />
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
