import './menubar.css';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SaveAsSharpIcon from '@mui/icons-material/SaveAsSharp';
 


function Menubar() {
    return (
        <div className='menuItems'>
            <a href="#dashboard" className='menuItem'>
                <DashboardIcon className='menuIcon' />
                <div className='box'>Dashboard</div>
            </a>
            <a href="#info" className='menuItem'>
                <PersonIcon className='menuIcon' />
                <div className='box'>Info</div>
            </a>
            <a href="#skills" className='menuItem'>
                <CodeIcon className='menuIcon' />
                <div className='box'>Skills</div>
            </a>
            <a href="#project" className='menuItem'>
                <ImportantDevicesIcon className='menuIcon' />
                <div className='box'>Work</div>
            </a>
            <a href="#project" className='menuItem'>
                <MailOutlineIcon className='menuIcon' />
                <div className='box'>Project</div>
            </a>
            <a href="#contact" className='menuItem'>
                <SaveAsSharpIcon className='menuIcon' />
                <div className='box'>Contact</div>
            </a>
        </div>
    );
}

export default Menubar;
