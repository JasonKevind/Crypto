import '../App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hidden } from './Hidden';
import { Main } from './Main';
import { HomeMain } from './HomeMain';
import { useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Home=(props)=>{
    const loc=useLocation();
    const nav=useNavigate();
    const ct=useSelector((state)=>state.counter.value)

    const data=[{id:'ind',head:"Indicator Analysis",body:"Get the Best list of Cryptocurrencies that are analyzed and processed with best Indicators"},
    {id:'sing',head:"Single Coin Charts",body:"See the Charts of every Cryptocurrency Market"},
    {id:'ai',head:"AI Assisted Analysis",body:"Get the list of Best and Profitable Cryptocurrencies that are analyzed using Artificial Intelligence"},
    {id:'learn',head:"Learn About Trading",body:"To know about Cryptocurrency Trading and Technical Indicator Analysis"}];
    return ( 
       <>        
       {ct!=="emailid"?<div className='Home'>
            <Header topic={props.topic} />
            <Hidden/>
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',paddingTop:30,paddingBottom:80}}>
                <HomeMain />
                 
            <div style={{display:'flex',flexDirection:'column',
            alignItems:'center',gap:15,padding:10}}>
            {
                data.map(it=>(
                    <Main id={it} body={it.body} head={it.head} />
                ))
            }  
               </div>
            </div>
            <Footer />
        </div>:
        <Navigate to={"/"} />
        }
        </>
 
    )
}