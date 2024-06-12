import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shop />
    </div>
  );
}

export default App;
