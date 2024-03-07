import { useNavigate } from 'react-router-dom';
import '../App.css';
export const Main=(props)=>{
    const nav=useNavigate();
    return (
        <div id={props.id} style={{gap:5,color:'white',display:'flex',backgroundColor:'#333',height:'fit-content',cursor:'pointer',
        flexDirection:'column',width:'80%',padding:15,borderRadius:10}} onClick={(e)=>{
            e.preventDefault();
            nav("/IndicatorAnalysis");
        }}>
            <div >{props.head}</div>
            <div>{props.body}</div>
        </div>
    )
}