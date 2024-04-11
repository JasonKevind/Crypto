import { useSelector } from 'react-redux';
import '../App.css';
import { useNavigate } from 'react-router-dom';
export const Hidden=()=>{
    const name=useSelector((state)=>state.counter.nam);
    const nav=useNavigate();
    return (
        <div className='Hidden' id="Hidden">
            <div style={{display:'flex',flexDirection:'column',width:'100%',color:'whitesmoke',
            justifyContent:'space-evenly',height:'clamp(330px,62.5vh,700px)',alignItems:'center'}}>
                <div>Name : {name}</div>
                <div>
                    <button onClick={(e)=>{
                        nav("/Profile");
                    }}>Your Profile</button>
                </div>
               
                <div>
                <button>Settings</button>
                </div>
                <div>
                <button>Contact & Help</button>
                </div>
                <div>                    
                <button>About Us</button>
                </div>
               
            </div>
        </div>
    )
}