import '../App.css';
export const Result=(props)=>{
    return (
        <div  style={{display:'flex',flexDirection:'column',width:'100%',gap:25,alignItems:'center',background:'white',borderRadius:10,paddingBlock:15}}>
            {props.data.map(it=>(
                <div className='Ind'>
                <div style={{gap:10}}>
                    <div><h2 style={{margin:0}}>{it.Coins}</h2></div>
                    <div id={it.name} style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:15}}>
                        <div>ATR : {it.ATR}</div>
                        <div>EMA : {it.EMA}</div>
                        <div>MFI : {it.MFI}</div>
                        <div>RSI : {it.RSI}</div>

                    </div>
                </div>
                <div style={{gap:10}}>
                    <div><button style={{background:'gold',color:'white',paddingInline:10,borderRadius:5,paddingBlock:3.5}} onClick={(e)=>{
                        e.preventDefault();    
                    }}>View Chart</button></div>
                    <div>
                        <h4 style={{margin:0}}>${it.Price}</h4>
                    </div>
                </div>
            
            </div>))
            }
        </div>
    )
}