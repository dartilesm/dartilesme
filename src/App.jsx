import { Container, globalCss } from '@nextui-org/react';
import { useEffect, useRef } from 'react';
import styles from './app.module.css';
import Header from './components/Header';
import AboutMe from './containers/AboutMe';
import MainBackground from './containers/MainBackground';
import MyHistory from './containers/MyHistory';
import Presentation from './containers/Presentation';
import Projects from './containers/Projects';
import Technologies from './containers/Technologies';
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
        <MyHistory />
        <Technologies />
      </Container>
    </>
  )
}

export default App;
