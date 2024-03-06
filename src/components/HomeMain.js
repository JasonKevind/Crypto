import { useEffect } from 'react';
import '../App.css';
import { GoDot } from "react-icons/go";

export const HomeMain=()=>{

    return (
        <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{display:'flex',marginTop:50,
        flexDirection:'column',color:'white',background:'#333',width:'85%',padding:10,borderRadius:10}}
        id='eth' 
        >
            <div><span style={{fontWeight:500,fontSize:25}}>ETH </span>(Etherium) <span style={{color:'rgba(0, 255, 117, 1)'}}>+0.29%</span></div>
            <div><h3 style={{fontSize:35,margin:2}}>$ 2054. 54</h3></div>
            <div id="MainHome" style={{display:'flex',flexDirection:'row',}}>
             <div>
                <h4>Volume 24h</h4>
                <p>7.729B USD</p>
             </div>
             <div>
                <h4>Volume 24h</h4>
                <p>7.729B USD</p>
             </div>
            </div>
        </div>
        <div>
        <GoDot color='grey' />
        <GoDot />
        <GoDot />
        </div>
        </div>
    )
}