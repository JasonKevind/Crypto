import { useEffect, useState } from 'react';
import '../App.css';
export const Indicator=()=>{
    const data=[{name:'RSI',sf:"Relative Strength Index",vals:[['Period',14],['Field','Close']]},
    {name:'MFI',sf:'Money Flow Index',vals:[['Period',14]]},
    {sf:'Moving Average Convergence Divergence',name:'MACD',vals:[['Fast MA',12],['Slow MA',26],['Signal',9]]},
    {sf:'Average True Range',name:'ATR',vals:[['Period',14]]},
    {sf:'Exponential Moving Average',name:'EMA',vals:[['Period',50],['Field','Close']]}
    ];
    return (
   <>
       <div style={{display:'flex',flexDirection:'column',gap:20,width:'100%',alignItems:'center'}}>
        {
            data.map(it=>(
                <div className='Ind'>
                    <div style={{gap:10}}>
                        <div><h2 style={{margin:0}}>{it.name}</h2>({it.sf})</div>
                        <div id={it.name} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            {it.vals.map(itt=>(
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <div style={{padding:5}}>{itt[0]} :</div>
                            <div id={it.name+itt[0]}>{itt[1]}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div style={{gap:10}}>
                        <div><button style={{background:'grey'}}>Select</button></div>
                        <div><a style={{color:'blue',textDecoration:'underline',cursor:'pointer'}} onClick={(e)=>{e.preventDefault();
                            for(var i=0;i<it.vals.length;i++){
                             const ans=prompt("Enter value for "+it.vals[i][0]);
                             document.getElementById(it.name+it.vals[i][0]).textContent=ans;
                            }
                        }}>Settings</a></div>
                    </div>
                
                </div>
                
            ))
        }
       </div>
       <button style={{background:'gold',width:'20%',height:'22.5px'}} onClick={(e)=>{
        e.preventDefault();
        fetch('/pythonapi',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({})})
       }}>Analyze</button>
    </> 
    )
}