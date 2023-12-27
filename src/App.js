import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Components/navBar.jsx';
import Offer from './Components/Offer.jsx';
import SliderSection from './Components/sliderSection.jsx';
import MobileSection from './Components/MobileSection.jsx';
import SmartWatch from './Components/SmartWatch.jsx';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='' element={<NavBar/>}></Route>
          <Route path='/slider' element={<SliderSection/>}></Route>
          <Route path='/offer' element={<Offer/>}></Route>
          <Route path='/mobile' element={<MobileSection/>}></Route>
          <Route path='/smartwatch' element={<SmartWatch/>}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
