import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shop />
      <About />
      <Contact />
    </div>
  );
}

export default App;
