import './Aboutme.css';

import AboutmeBox from './AboutmeBox';
import Moduletitle from '../Moduletitle/Moduletitle'

function Aboutme() {
    return (
        <div className='AboutMe-box' id='info'>
            <Moduletitle Title = 'About Me' />
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'5rem', background:'rgb(0,0,0,0)'}}>
                <AboutmeBox />
                <div className='img-box-div'>
                    <img src="./Picture1.png" alt="" />
                </div>
            </div>

        </div>
    );
}

export default Aboutme;
