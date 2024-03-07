import '../App.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
export const Header=(props)=>{
    const ct=useSelector((state)=>state.counter.value)

    return (
        <div className='Header'>
            <div>
                {ct}
            </div>
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