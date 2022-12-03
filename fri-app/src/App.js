
// import './App.css';
import Navbar from './Navbar.js';
// import Allcard from './Components/Allcards';

import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div>
      <Navbar/>;
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
      </div>
      {/* <Allcard/>; */}
  
    </div>
  );
}

export default App;
