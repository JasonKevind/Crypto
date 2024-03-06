import '../App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hidden } from './Hidden';
export const Indicator=()=>{
    const data=[{name:"RSI",sf:"Relative Strength Index",vals:[['Period',14],['Field','Close']]},
    {name:'MFI',sf:'Money Flow Index',vals:[['Period',14]]},
    {sf:'Moving Average Convergence Divergence',name:'MACD',vals:[['Fast MA',12],['Slow MA',26],['Signal',9]]},
    {sf:'Average True Range',name:'ATR',vals:[['Period',14]]},
    {sf:'Exponential Moving Average',name:'EMA',vals:[['Period',50],['Field','Close']]}
    ];
    return (
   
       <div style={{display:'flex',flexDirection:'column',gap:20,width:'100%',alignItems:'center'}}>
        {
            data.map(it=>(
                <div className='Ind'>
                    <div>
                        <div><h2>{it.name}</h2></div>
                        <div>{it.sf}</div>
                    </div>
                    <div>
                        <div><button>Select</button></div>
                        <div><a>Settings</a></div>
                    </div>
                </div>
                
            ))
        }
       </div>
     
    )
}