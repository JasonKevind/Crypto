import { useSelector } from 'react-redux';
import '../App.css';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
export const Profile=()=>{
    const val=useSelector((state)=>state.counter.value);
    const name=useSelector((state)=>state.counter.nam);
    const [loaded,setLoaded]=useState("")
    useEffect((e)=>{
        const getNumber=async(mail)=>{
            const ret=await fetch("/http://localhost:8080/getAll",{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({"emailid":val})});
            const ans=await ret.json();
            setLoaded(prev=>ans.hasOwnProperty("number")?ans["number"]:"u");            
        }
        getNumber(val);
    },[])
    return(
        <>
        {val!=="emailid"?
        <>
        <div>Name : {name}</div>
        <div>Mail Id : {val}</div>
      
        </>
        :
        <Navigate to="/" />
        }
        </>
    )
}