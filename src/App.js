import { Route, Routes, useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { CoinPage } from './components/CoinPage';
import { useEffect } from 'react';
import { IndicatorAnalysis } from './components/IndicatorAnalysis';
function App() {

  return (
    <div id="dd" style={{height:'100%',paddingBottom:25}}>
     <Routes> 
      <Route index path="/" element={<Login  />} />
      <Route path="/Home" element={<Home topic={"CryptoEval"}/>} />
      <Route path="/Coins" element={<CoinPage topic={"Coins Chart"} />}/>
      <Route path="/IndicatorAnalysis" element={<IndicatorAnalysis topic={"Indicator Analysis"}/>} />
     </Routes>
    </div>
  );
}

export default App;
