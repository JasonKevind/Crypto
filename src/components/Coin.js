import '../App.css';
export const Coin=(props)=>{
    return (
        <div className='Coin'>
            <div>
                <div style={{fontWeight:700,fontSize:22.5}}>{props.coin}</div>
                <div>Bitcoin/USD</div>
            </div>
            <div>

            </div>
            <div>
                <div style={{fontWeight:700,fontSize:20}}>${props.val}</div>
                <div>+{props.inc}%</div>
            </div>
        </div>
    )
}