import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  transition: background-color 0.4s ease;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(124, 77, 255, 0.15) 0%,
      rgba(124, 77, 255, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 188, 212, 0) 50%,
      rgba(0, 188, 212, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
