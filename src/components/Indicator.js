import {useState } from 'react';
import '../App.css';
import { Result } from './Result';
export const Indicator=()=>{
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
    const [result,setResult]=useState([
        //{name:"BTC",value:"$321.23",pros:[{pro:"RSI",provalue:14},{pro:"MSI",provalue:22}]}
    ]);
    return (
   <>
       <div style={{display:'flex',flexDirection:'column',gap:20,width:'100%',alignItems:'center'}}>
       <div style={{color:'white'}}><h3>{!result.length?"Select Indicators":"Your Results"}</h3>{Object.keys(result)?"Select Atleast One Indicator to Analyse. You can also alter the default parameter in settings of each Indicator. Selecting many Indicator will give you a better result."
       :"Based on the Indicators you chosed, these are the coins are on top of the List."}
       </div>
       {!result.length?
       <>
       {
        
            data.map(it=>(
                <div className='Ind' id={it.name+'div'} style={{background:'white'}}>
                    <div style={{gap:10}}>
                        <div><h2 style={{margin:0}}>{it.name}</h2>({it.sf})</div>
                        <div id={it.name} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            {it.vals.map((itt,ind)=>(
                            <div style={{padding:5}} ind={itt[0]+it.vals[ind][0]}>{itt[0]}:{hh[it.name][it.vals[ind][0]]}</div>
                            ))}
                        </div>
                    </div>
                    <div style={{gap:10}}>
                        <div style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}><button id={'select'+it.name} className='select' onClick={(e)=>{
                            e.preventDefault();
                            setSelect((prev)=>{
                                document.getElementById(it.name+"div").style.transition="0.3s";
                                document.getElementById(it.name+"div").style.backgroundColor="grey"
                                let pp={...prev};
                                pp[it.name]=1;
                                return pp;
                            })
                        }}>Select</button>
                        <button id={'cancel'+it.name} className='unselect' onClick={(e)=>{
                            e.preventDefault();
                            if(select.hasOwnProperty(it.name)){
                            setSelect((prev)=>{
                                document.getElementById(it.name+"div").style.transition="0.3s";
                                document.getElementById(it.name+"div").style.backgroundColor="white";
                                let pp={...prev};
                                delete pp[it.name];
                                return pp;
                            })
                        
                        }
                        }}>Cancel</button>
                        </div>
                        
                        <div><p style={{color:'blue',textDecoration:'underline',cursor:'pointer'}} onClick={(e)=>{e.preventDefault();
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
                        }}>Settings</p></div>
                    </div>
                
                </div>
                
            ))
        }</>
        :
        <><Result data={result} /></>}
       </div>
       {!result.length?<button style={{background:'gold',width:'20%',height:'22.5px',marginBottom:17.5}} onClick={async(e)=>{
        e.preventDefault();
        const postt={}
        const arr=Object.keys(select);
        for(var i=0;i<arr.length;i++){
            postt[arr[i]]={...hh[arr[i]]}
        }
       
        if(Object.keys(postt).length){
            fetch('http://43.204.70.107:8000/pythonapi',{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({postt})}).then(res=>res.json()).then(ans=>{setResult(prev=>ans)}).catch(error=>console.log(error))
        //fetch('/pythonapi',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({select})}).then(ans=>ans.json()).then(res=>{
        //  setResult(prev=>res);
       // }).catch((err)=>{alert(("Please try later....");)})
        }
        else{alert("Choose atleast one indicator...");}
       }}>Analyze</button>:
       <button style={{background:'gold',width:'20%',height:'22.5px',marginBottom:17.5}}>Refresh</button>
       }</>
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