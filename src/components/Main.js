import '../App.css';
export const Main=(props)=>{
    return (
        <div id={props.id} style={{gap:5,color:'white',display:'flex',backgroundColor:'#333',height:'fit-content',
        flexDirection:'column',width:'clamp(330px,70vw,5 20px)',padding:15,borderRadius:10}}>
            <div >{props.head}</div>
            <div>{props.body}</div>
        </div>
    )
}