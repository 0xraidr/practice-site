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
    <div className="App bg-gradient-to-t from-sec-blue via-main-blue to-black pt-10 w-full h-screen">
      <Welcome />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
    </div>
  );
}

export default App;
