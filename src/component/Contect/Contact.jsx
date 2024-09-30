// import './Contact.css';
// import SendIcon from '@mui/icons-material/Send';

// import Moduletitle from '../Moduletitle/Moduletitle';

// const Contact = () => {
//     return (
//         <div className='contact-box' id='contact'>
//             <Moduletitle Title='Contact' txt='Im currently available for freelance work' />
//             <div className="contact-from">
//                 <h2>Send me a message</h2>
//                 <div className='' style={{display:'flex', gap:'6rem' }}>
//                     <div className='input-box'>
//                         <p>your Name*</p>
//                         <input type="text" placeholder="Enter your name" id="name" style={{ width: "400px" }} />
//                     </div>
//                     <div className='input-box'>
//                         <p>your Email*</p>
//                         <input type="text" placeholder="Enter your Email" id="name" style={{ width: "400px" }} />
//                     </div>
//                 </div>
//                 <div className='input-box'>
//                     <p>your message*</p>
//                     <input type="text" placeholder="Enter your message" id="name" style={{ width: "900px" }} />
//                 </div> 
//                 <div className='send_message_button'>
//                     <p>send message</p> 
//                     <SendIcon className='SendIcon'/>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Contact;  




import './Contact.css';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';  // Import the emailjs library
import { useState } from 'react'; // To manage form inputs and feedback

import Moduletitle from '../Moduletitle/Moduletitle';

const Contact = () => {
    // State for managing form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handling form input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    // Function to send the email
    const sendEmail = (e) => {
        e.preventDefault();  // Prevent form from refreshing the page

        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with actual EmailJS credentials
        emailjs.send('service_01tomrn', 'template_gsvlq5w', formData,'t-1KDKVyT18cPTiio')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message, please try again.');
                console.log(error.text);
            });

        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='contact-box' id='contact'>
            <Moduletitle Title='Contact' txt='I’m currently available for freelance work' />
            <div className="contact-from">
                <h2>Send me a message</h2>
                <div style={{ display: 'flex', gap: '6rem' }}>
                    <div className='input-box'>
                        <p>Your Name*</p>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            id="name" 
                            style={{ width: "400px" }} 
                            value={formData.name} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className='input-box'>
                        <p>Your Email*</p>
                        <input 
                            type="text" 
                            placeholder="Enter your Email" 
                            id="email" 
                            style={{ width: "400px" }} 
                            value={formData.email} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>
                <div className='input-box'>
                    <p>Your Message*</p>
                    <textarea 
                        placeholder="Enter your message" 
                        id="message" 
                        style={{ width: "900px" }} 
                        value={formData.message} 
                        onChange={handleInputChange} 
                    />
                </div> 
                <div className='send_message_button' onClick={sendEmail}>
                    <p>Send Message</p> 
                    <SendIcon className='SendIcon' />
                </div>
            </div>
        </div>
    );
};

export default Contact;
