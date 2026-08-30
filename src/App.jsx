import CustomCursor from './components/CustomCursor.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Origin from './components/Origin.jsx';
import Work from './components/Work.jsx';
import Beyond from './components/Beyond.jsx';
import Doodle from './components/Doodle.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <CustomCursor />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Origin />
        <Work />
        <Beyond />
        <Doodle />
        <Contact />
      </main>
      <footer>made with tape, coffee &amp; a little too much scrolling ✂️</footer>
    </>
  );
}
