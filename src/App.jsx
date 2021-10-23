import { Container } from '@nextui-org/react';
import styles from './app.module.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import MyBeginnings from './components/MyBeginnings';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

const App = () => (
  <>
    <Header />
    <Container className={styles.mainContent}>
      <Presentation />
      <AboutMe />
      <Projects />
      <MyBeginnings />
      <Technologies />
    </Container>
  </>
);

export default App;
