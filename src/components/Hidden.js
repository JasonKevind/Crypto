import '../App.css';
export const Hidden=()=>{
    return (
        <div className='Hidden' id="Hidden">
            <div style={{display:'flex',flexDirection:'column',width:'100%',color:'whitesmoke',
            justifyContent:'space-evenly',height:'clamp(330px,62.5vh,700px)',alignItems:'center'}}>
                <div>Name : </div>
                <div>
                    <button>Your profile</button>
                </div>
                <div>
                <button>Subscription</button>

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