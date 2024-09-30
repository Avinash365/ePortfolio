import './skil.css'

import Moduletitle from '../Moduletitle/Moduletitle';

import { RiComputerLine } from "react-icons/ri";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";


const Skil = () => {
    const txt = "</>";
    return (
        <div className='skil-box' id="skills">
            <div className='skil-box1'>
                <Moduletitle Title='Skils' txt='I am striving to never stop learning and improving' ></Moduletitle>
                <h1>{txt}</h1>
            </div>
            <div className='skil-box2'>
                <SkikBox title='Web developement' text='HTML , CSS , JS , REACT' />
                <SkikBox title='Data Science' text='Python , SQL, Power BI , TensorFlow' />
            </div>
            <div className='Icon-box-up'>
                <IconBox Icon={ImHtmlFive} color='#E54F26' txt='HTML'></IconBox>
                <IconBox Icon={FaCss3Alt} color='#0C73B8' txt='CSS'></IconBox>
                <IconBox Icon={TbBrandJavascript} color='#E7A020' txt='JS'></IconBox>
                <IconBox Icon={FaReact} color='#28A9E0' txt='React'></IconBox>
            </div>

        </div>
    )
}
export default Skil;
export const SkikBox = (Props) => {
    return (
        <div className='skilContentBox'>
            <RiComputerLine style={{ background: 'rgb(0,0,0,0)' }} />
            <h2>{Props.title}</h2>
            <p>{Props.text}</p>
        </div>
    )
}
export const IconBox = ({ Icon, color, txt }) => {
    return (
        <div className='Icon-Box1'>
            <div className='Icon-Box' style={{ backgroundColor: color }}>
                <Icon style={{ color: 'white', fontSize: '60px', background: 'rgba(0,0,0,0)' }} />
            </div>
            <h3 style={{ color: color, backgroundColor:'rgba(0,0,0,0)' }}>{txt}</h3>
        </div>
    )
}