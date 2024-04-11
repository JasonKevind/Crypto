import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { CoinPage } from './components/CoinPage';
import { IndicatorAnalysis } from './components/IndicatorAnalysis';
import { Profile } from './components/Profile';
import { useEffect } from 'react';
function App() {
  useEffect(e=>{
    if(window.innerWidth>450){
      alert(111)
    }
  },[])
  return (
    <div id="dd" style={{height:'100%',paddingBottom:25,paddingLeft:10,paddingRight:10}}>
     <Routes> 
      <Route index path="/" element={<Login  />} />
      <Route path="/Home" element={<Home topic={"CryptoEval"}/>} />
      <Route path="/Coins" element={<CoinPage topic={"Coins Chart"} />}/>
      <Route path="/IndicatorAnalysis" element={<IndicatorAnalysis topic={"Indicator Analysis"}/>} />
      <Route path="Profile" element={<Profile/>} />
     </Routes>
    </div>
  );
}
export default App;