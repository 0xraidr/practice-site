import Nav from './components/Nav';
import Welcome from './components/Welcome';
import './index.css';


function App() {
  return (
    <div>
    <Nav />
    <div className="App bg-main-blue w-full h-screen">
      <Welcome />
    </div>
    </div>
  );
}

export default App;
