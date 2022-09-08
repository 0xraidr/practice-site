import Nav from './components/Nav';
import Welcome from './components/Welcome';
import './index.css';


function App() {
  return (
    <div className='pt-10'>
      <Nav />
    <div className="App bg-gradient-to-br from-main-blue via-sec-blue to-black pt-10 w-full h-screen">
      <Welcome />
    </div>
    </div>
  );
}

export default App;
