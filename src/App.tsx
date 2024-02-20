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
      <About />
			<Skills />
      <Contact />
    </>
  );
}

export default App;
