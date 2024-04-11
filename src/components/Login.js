import { useState } from 'react';
import '../App.css';
import { change, changeNam } from '../state/counter/counter';
import {  useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
export const Login=()=>{
    const nav=useNavigate();
    const dispatch=useDispatch();
    const [sign,setSign]=useState(false);
    const signUp=[{text:"name"},{text:"emailid"},{text:"password"},{text:"number"}]
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'100vh',width:"100%"}}>
           <div style={{textAlign:'center',fontSize:25,fontWeight:500,color:'white    '}}>CryptoEval</div>
           {!sign?<div
            style={{display:'flex',height:'clamp(150px,30vh,320px)',
           flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
            <div style={{height:'50%',display:'flex',width:'100%',
            flexDirection:'column',color:'white',justifyContent:'space-evenly',alignItems:'center'}}>
                <label >Email ID</label>
                <input type='email' id="email"   placeholder='Enter your Email ID' />
                <label>Password</label>
                <input id="password"   placeholder='Enter the password'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',
            alignItems:'center',width:'100%',height:'50%'}}>
                <div>
                    <button style={{width:82.5,height:27.5,backgroundColor:'rgba(34, 209, 199, 1)'}} onClick={async(e)=>{  
                        fetch("http://13.127.1.112:8080/Login",{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({emailid:document.getElementById("email").value,password:document.getElementById("password").value})}).then(ans=>ans.json()).then(res=>{
                            if(res.hasOwnProperty("1")){
                            console.log(res);
                            dispatch(change(res['1']));
                            dispatch(changeNam(res['2']));
                            nav("/Home");}
                            else{
                                alert("Wrong password or emailid");
                            }
                        }).catch(e=>{
                            alert("Please try later...");
                        })
                      
                   }}>Login</button>
                </div>
                <div>
                    ----OR----
                </div>
                <div>
                    <button style={{width:82.5,height:27.5,backgroundColor:'rgba(255, 200, 3, 1)'}}
                    onClick={(e)=>setSign(true)}
                    >SignUp</button>
                </div>
            </div>
           </div>
           :
           <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'clamp(250px,40vh,500px)',justifyContent:'space-evenly'}}>
            {signUp.map(it=>(
                <div style={{display:'flex'}}>
                    <div  style={{display:'flex',width:'50%'}}><div style={{color:'whitesmoke'}}>{it.text[0].toUpperCase()+it.text.substring(1,)}</div></div>
                    <div style={{display:'flex',width:'50%',alignItems:'center'}}><input   style={{height:'70%',width:'clamp(100px,25vw,130px)'}} id={it.text} /></div>
                </div>
            ))}
            <button style={{width:82.5,height:27.5,backgroundColor:'rgba(255, 200, 3, 1)'}}
            onClick={async(e)=>{
                fetch("http://13.127.1.112:8080/SignUp",{method:'POST',body:JSON.stringify({name:document.getElementById("name").value,
                emailid:document.getElementById("emailid").value,password:document.getElementById("password").value,
            number:document.getElementById("number").value}),headers:{'Content-Type':'application/json'}}).then(ans=>ans.json()).then(res=>{
                if(res.hasOwnProperty("1")){
                    dispatch(change(res['1']));
                    dispatch(changeNam(res['2']));
                    nav("/Home");
                }
                else{
                    alert("Email already exists. Please try with another mailid.")
                }
            }).catch(error=>{
                alert("Please try later...");
            })
            }}
            >SignUp</button>
           </div>
            } 
       
        </div>

    )
}