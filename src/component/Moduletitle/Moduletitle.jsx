import './Moduletitle.css'

import { TfiLineDashed } from "react-icons/tfi";
import { IoIosSquare } from "react-icons/io";
import { CiDesktopMouse2 } from "react-icons/ci";

function Moduletitle(Props) {
    return (
        <div className='moduletitle'>
            <CiDesktopMouse2 style={{ fontSize: '50px', color: '#12F7D6' }} />
            <TfiLineDashed style={{ marginTop: '1rem', fontSize: '40px', color: 'white', transform: 'rotate(90deg)' }} />
            <TfiLineDashed style={{ marginTop: '0.4rem', fontSize: '40px', color: 'white', transform: 'rotate(90deg)' }} />
            <IoIosSquare style={{ marginTop: '0.4rem', fontSize: '20px', color: 'white', transform: 'rotate(45deg)' }} />
            <h1 style={{
                color: '#12F7D6',
                padding: '1rem',
                borderBottom: '4px solid #12F7D6', // Adjust the thickness of the underline
                display: 'inline', // Ensures the underline does not exceed the width of the text
                lineHeight: '1', // Adjust this to control the gap between text and underline
                marginBottom: '0.5rem' // Optional: adjust the margin if needed
            }}>
                {Props.Title}
            </h1>
            <p style={{color:'white', margin:'0'}}>
                {Props.txt}
            </p>
        </div>
    )
} export default Moduletitle; 