import NavigationBar from './components/NavigationBar'
import About from './components/About'
import Profile from './components/Profile'
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavigationBar />
			<Profile />
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  );
}

export default App;
