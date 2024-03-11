import '../App.css';
export const Result=(props)=>{
    return (
        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
            {props.data.map(it=>(
                <div className='Ind'>
                <div style={{gap:10}}>
                    <div><h2 style={{margin:0}}>{it.name}</h2>{it.sf}</div>
                    <div id={it.name} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                        {it.pros.map((itt)=>(
                        <div style={{padding:5}}>{itt.pro}:{itt.provalue}</div>
                        ))}
                    </div>
                </div>
                <div style={{gap:10}}>
                    <div><button style={{background:'grey'}} onClick={(e)=>{
                        e.preventDefault();
                        
                    }}>View Chart</button></div>
                    <div>
                        <h4 style={{margin:0}}>{it.value}</h4>
                    </div>
                </div>
            
            </div>))
            }
        </div>
    )
}