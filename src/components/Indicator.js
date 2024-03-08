import {useState } from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

import '../App.css';
export const Indicator=()=>{
    const nav=useNavigate();
    const data=[{'name':'RSI','sf':"Relative Strength Index",'vals':[['Period','14'],['Field','Close']]},
    {'name':'MFI','sf':'Money Flow Index','vals':[['Period','14']]},
    {'sf':'Moving Average Convergence Divergence','name':'MACD','vals':[['Fast MA','12'],['Slow MA','26'],['Signal','9']]},
    {'sf':'Average True Range','name':'ATR','vals':[['Period','14']]},
    {'sf':'Exponential Moving Average','name':'EMA','vals':[['Period','50'],['Field','Close']]}
    ];
    const [hh,setHh]=useState({
        "RSI":{"Period":"14","Field":"Close"},
        "MFI":{"Period":"14"},
        "MACD":{"Fast MA":"12","Slow MA":"26","Signal":"9"},
        "ATR":{"Period":"14"},
        "EMA":{"Period":"50","Field":"Close"}
    })
    const [select,setSelect]=useState({});
    return (
   <>
       <div style={{display:'flex',flexDirection:'column',gap:20,width:'100%',alignItems:'center'}}>
        {
            data.map(it=>(
                <div className='Ind'>
                    <div style={{gap:10}}>
                        <div><h2 style={{margin:0}}>{it.name}</h2>({it.sf})</div>
                        <div id={it.name} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            {it.vals.map((itt,ind)=>(
                            <div ind={itt[0]+it.vals[ind][0]}>{itt[0]} : {hh[it.name][it.vals[ind][0]]}</div>
                            ))}
                        </div>
                    </div>
                    <div style={{gap:10}}>
                        <div><button style={{background:'grey'}} onClick={(e)=>{
                            e.preventDefault();
                            setSelect((prev)=>{
                                let pp={...prev};
                                pp[it.name]=1;
                                return pp;
                            })
                        }}>Select</button></div>
                        <div><a style={{color:'blue',textDecoration:'underline',cursor:'pointer'}} onClick={(e)=>{e.preventDefault();
                            for(var i=0;i<it.vals.length;i++){
                            const ss=it.vals[i][0]; 
                            let ans='';
                            if(ss==='Field'){
                                const res=window.confirm("Choose Ok for Open and Cancel for Close");
                                ans=(res)?"Open":"Close";
                            }
                            else{
                            ans=prompt("Enter value for "+ss);
                            }
                            if(ans!==null && ans.length>0){
                            setHh((prev)=>{
                                let upd={...prev};
                                upd[it.name][ss]=ans;
                                return upd;
                             })
                            }
                            
                        }
                        }}>Settings</a></div>
                    </div>
                
                </div>
                
            ))
        }
       </div>
       <button style={{background:'gold',width:'20%',height:'22.5px'}} onClick={async(e)=>{
        e.preventDefault();
        const postt={}
        const arr=Object.keys(select);
        for(var i=0;i<arr.length;i++){
            postt[arr[i]]={...hh[arr[i]]}
        }
        if(Object.keys(postt).length){
        //fetch('/pythonapi',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({select})}).then(ans=>ans.json()).then(res=>{
        //  nav("/Other",{state:{...postt}});
       // }).catch((err)=>{alert(("Please try later....");)})
        }
        else{alert("Choose atleast one indicator...");}
       }}>Analyze</button>
    </> 
    )
}
/* <>
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
    </> */