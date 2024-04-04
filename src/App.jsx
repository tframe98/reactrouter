import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red'; 
import Blue from './components/Blue'; 
import Home from './components/Home'; 
import Navbar from './components/Navbar';



const App = () => {
  

  return (
    <div>
      <Navbar /> 
      <div id="main-section">
      <Routes>
  <Route path="/blue" element={<Blue />} />
  <Route path="/red" element={<Red />} />
  <Route path="/" element={<Home />} /> 
   
      </Routes>

      </div>
    </div>
  );
}

export default App;

