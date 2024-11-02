import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Footer from './component/Footer';
import About from './component/About';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Header scrollToAbout={scrollToAbout} scrollToFooter={scrollToFooter} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div ref={aboutRef}>
          <About />
        </div>
        <Footer ref={footerRef} />
      </div>
    </Router>
  );
}

export default App;
