import '../App.css';
import { Coin } from './Coin';
import { Header } from './Header';
import { Hidden } from './Hidden';
import { Footer } from './Footer';
import { Indicator } from './Indicator';
export const CoinPage=(props)=>{
    const data=[{coin:"BTCUSD",inc:"2.19",val:"37,915.79"},
    {coin:"BNBUSD",inc:"2.19",val:"37,915.79"},
    {coin:"BNBUSD",inc:"2.19",val:"37,915.79"}
    ];
    return (
        <div className='Home'>
        <Header topic={props.topic} />
        <Hidden/>
        <div style={{display:'flex',flexDirection:'column',paddingBottom:70
        ,alignItems:'center',width:'90%',gap:30,height:'clamp(400px,60vh,800px)',paddingTop:40}}>
            {
                data.map(it=>(
                    <Coin coin={it.coin} val={it.val} inc={it.inc} />
                ))
            }
        </div>
        <Footer/>
        </div>
    )
}