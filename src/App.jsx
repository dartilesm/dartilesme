import { Container } from '@nextui-org/react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

const App = () => (
  <>
    <Header />
    <Container>
      <Presentation />
      <Projects />
      <AboutMe />
    </Container>
  </>
);

export default App;
