import { NavLink, Link } from "react-router-dom";
import './navbar.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="rightItem">
                <DashboardIcon className="navicon" />
                <a
                    href="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "inactive"
                    }
                >
                    Avinash Kumar Jha
                </a>
            </div>
            <div className="leftItem">
                <a
                    href="#dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "inactive"
                    }
                >
                    Home
                </a>
                <a
                    href="#project"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "inactive"
                    }
                >
                    Project
                </a>
                {/* <a href=""><InstagramIcon className="navicon" /></a>
                <GitHubIcon className="navicon" />
                <LinkedInIcon className="navicon" /> */}
                <Link to="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="navicon" />
                </Link>
                <Link to="https://github.com/Avinash365" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="navicon" />
                </Link>
                <Link to="https://www.linkedin.com/in/avinash-kumar-jha-382286247/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="navicon" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;