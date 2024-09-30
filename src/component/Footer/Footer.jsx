import './footer.css'; 

import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
    return (
        <div className="Footer_div">
            <div>
                <p>© 2025 jhaAvinash. All rights reserved.</p>
            </div> 
            <div style={{display:'flex',gap:'1rem'}}>
                <p>Privacy Policy</p> 
                <p>Terms & Conditions</p>
            </div> 
            <div className='footer-icon'>
                <LinkedInIcon/> 
                <GitHubIcon/>
                <InstagramIcon/>
            </div> 
            <div>
             <p2>Design By <span style={{color:'#12F7D6'}}>@Avinash Jha</span></p2>
            </div>
        </div>
    )
} 
export default Footer; 