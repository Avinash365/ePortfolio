import './title.css' 

const txt = "<P>"
const txt1 = "</p>"
function Title (){
    return(
        <div className='title-box'>
            <h1>Developer</h1> 
            <h2>Hey</h2> 
            <h2>I'm <span style={{color:'#98FAEC'}}>Avinash</span>,</h2> 
            <h2>Full-Stack Developer</h2>  
            <br/> 
            <p style={{color:'#98FAEC'}}>{txt}</p> 
            <p style={{marginLeft:'2rem'}}>I am Avinash Kumar Jha from darbhanga Bihar,</p> 
            <p style={{marginLeft:'2rem'}}>Pursuing a Bachelor of Engineering from UIT.</p>   
            <p style={{color:'#98FAEC'}}>{txt1}</p>
            <br/>
            <span>Let's Talk</span>
        </div>
    )
}export default Title; 