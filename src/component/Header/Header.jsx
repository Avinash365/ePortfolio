import './header.css'  


import Cv from './cv/Cv' 
import Title from './title/Title' 
import Title1 from './title/Title1'  


function Header () {
    return(
        <div className='header-box' id = 'dashboard'>  
            <Cv/> 
            <Title/> 
            <Title1/> 
        </div>
    )
}export default Header; 