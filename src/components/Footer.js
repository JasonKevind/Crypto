import '../App.css';
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
export const Footer=()=>{
    const nav=useNavigate();
    return (
        <div className='Footer'>
            <div onClick={(e)=>{e.preventDefault();nav("/Home",{state:{user:"shalomjebaraj121@gmail.com"}});}}><FaHome size={40} /></div>
            <div><FaHeart size={40}/></div>
            <div><FaSearch size={40}/></div>
            <div onClick={(e)=>{
                e.preventDefault();
                nav("/Coins");
            }}><BsSuitcaseLgFill size={40} /></div>
            <div><IoIosSettings size={40}/></div>
        </div>
    )
}