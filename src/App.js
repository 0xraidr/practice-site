import Nav from './components/Nav';
import Welcome from './components/Welcome';
import './index.css';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div className='pt-10'>
      <Nav />
    <div className="App">
      <Welcome />
      <About />
      <Experience />
      <Portfolio />
    </div>
      <Contact />
    </div>
  );
}

export default App;

