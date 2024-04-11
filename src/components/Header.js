import '../App.css';
import { GiHamburgerMenu } from "react-icons/gi";
export const Header=(props)=>{
    return (
        <div className='Header'>
            <div style={{color:'white',fontWeight:600,fontSize:25}}>{props.topic}</div>
            <div>
                <div><GiHamburgerMenu size={20} color='white' onClick={(e)=>{
                    e.preventDefault();
                    if(document.getElementById("Hidden").style.visibility==='visible'){
                        document.getElementById("Hidden").style.visibility="hidden";
                        document.getElementById("Hidden").style.transition="0.3s";
                    }
                    else{
                        document.getElementById("Hidden").style.visibility="visible";
                        document.getElementById("Hidden").style.transition="0.3s";
                    }
                }}/></div>
            </div>
        </div>
    )
}