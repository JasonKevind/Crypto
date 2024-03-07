import '../App.css';
import { Header } from './Header';
import { Hidden } from './Hidden';
import { Indicator } from './Indicator';
export const IndicatorAnalysis=(props)=>{
    return (
        <div className='Home'>
            <Header topic={props.topic} />
            <Hidden/>
            <Indicator />
        </div>
    )
}