import { Route, Routes, useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { CoinPage } from './components/CoinPage';
import { Indicator } from './components/Indicator';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coin } from './components/Coin';
function App() {
  const loc=useLocation();
  const nav=useNavigate();
  useEffect(e=>{
    window.addEventListener("resize",(er)=>{
      if(window.innerWidth>600 || window.innerHeight<550){
        document.getElementById("dd").style.display='none';
      }
    },[])
  },[])
  return (
    <div id="dd" style={{height:'100%'}}>
     <Routes> 
      <Route index path="/" element={<Login  />} />
      <Route path="/Home" element={<Home topic={"CryptoEval"}/>} />
      <Route path="/Coins"  element={<CoinPage topic={"Coins Chart"} />}/>
      
     </Routes>
    </div>
  );
}

export default App;
