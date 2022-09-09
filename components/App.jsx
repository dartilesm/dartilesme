import { Container, globalCss } from '@nextui-org/react';
import Header from './Header';
import Vector from './Vector/Vector';
import AboutMe from '../containers/AboutMe';
import MainBackground from '../containers/MainBackground';
import MyHistory from '../containers/MyHistory';
import Presentation from '../containers/Presentation';
import Projects from '../containers/Projects';
import Technologies from '../containers/Technologies';

const globalStyles = globalCss({
  '*': {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
  },
  body: {
    backgroundColor: '$background'
  }
})

const App = () => {
  globalStyles()

  return (
    <>
      <Header />
      <Container css={{ '@mdMax': { padding: 0 }}}>
        <MainBackground />
        <Presentation />
        <AboutMe />
        <Vector 
          type="StackedPeaks" 
          css={{
            position: 'absolute',
            left: 0
          }}
        />
        <Projects />
        <MyHistory />
        <Technologies />
      </Container>
    </>
  )
}

export default App;
