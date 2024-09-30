import { NavLink, Link } from "react-router-dom";
import './lazyNavbar.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DashboardIcon from '@mui/icons-material/Dashboard';

function LazyNavbar() {
    return (
        <div className='lazyNavbar'>
            <div className="lazyRightItem1">
                <DashboardIcon className="lazyNavicon1"  style={{display:'none'}}/>
                <NavLink
                    to="/"
                     className={() => 'inactive1'}
                >
                    Avinash Kumar Jha
                </NavLink>
            </div>
            <div className="lazyLeftItem1">
                <NavLink
                    to="/"
                     className={() => 'inactive1'}  

                >
                    Home
                </NavLink>
                <NavLink
                    to="/Project"
                     className={() => 'inactive1'}
                >
                    Project
                </NavLink>
                
            </div>
        </div>
    );
}

export default LazyNavbar;