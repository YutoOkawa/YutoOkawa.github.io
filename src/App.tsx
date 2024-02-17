import NavigationBar from './components/NavigationBar'
import About from './components/About'
import Profile from './components/Profile'
import Skills from './components/Skills';

function App() {
  return (
    <>
      <NavigationBar />
			<Profile />
      <About></About>
			<Skills />
    </>
  );
}

export default App;
