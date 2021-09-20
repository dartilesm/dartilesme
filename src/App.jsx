import { Container } from '@nextui-org/react';
import styles from './app.module.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

const App = () => (
  <>
    <Header />
    <Container className={styles.mainContent}>
      <Presentation />
      <Projects />
      <AboutMe />
    </Container>
  </>
);

export default App;
