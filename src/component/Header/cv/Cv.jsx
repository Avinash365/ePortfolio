import './cv.css'

import DownloadIcon from '@mui/icons-material/Download';
import DoneAllIcon from '@mui/icons-material/DoneAll';

function Cv() {
    return (
        <div className="cv-box">
            <div className='logo'></div>
            <h2>Avinash</h2>
            <p>full-stack Developer</p>

            <div className='cv-list'>
                <DoneAllIcon  style={{color:'#12f7d6'}}/><p>HTML, CSS, Java Script</p>
            </div> 
            <div className='cv-list'>
                <DoneAllIcon  style={{color:'#12f7d6'}}/><p>Mysql, React.Js, Node.Js</p>
            </div> 
            <div className='cv-list'>
                <DoneAllIcon  style={{color:'#12f7d6'}}/><p>MongoDB, Socket.IO, API</p>
            </div>

            <div className='cv-skils'>
                <span>cpp</span><span>Python</span><span>Java</span><span>React</span>
            </div>
            
            <button className="cv-btn">
                <a href="/cv.pdf" download="Avinash_CV.pdf" style={{ backgroundColor: 'white', textDecoration: 'none', color: 'black' }}>
                    Download CV
                </a> <DownloadIcon style={{ backgroundColor: 'white' }} />
            </button>
        </div>
    )
} export default Cv; 
