import { Container } from '@nextui-org/react';
import styles from './app.module.css';
import AboutMe from './containers/AboutMe';
import Header from './components/Header';
import MyBeginnings from './containers/MyBeginnings';
import Presentation from './containers/Presentation';
import Projects from './containers/Projects';
import Technologies from './containers/Technologies';

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
