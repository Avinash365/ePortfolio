import './Aboutme.css'
const txt = "<p>";
const txt1 = "</p>"; 

function AboutmeBox () {
    return (
        <div className='hii' style={{border:'', background: 'rgba(255, 255, 255, 0)'}}>
                <div className="me-box">
                    <h2 style={{ padding: '0', margin: '0' }}>About Me</h2>
                </div>
                <div className='about-me'>
                    <span style={{ color: '#12F7D6' }}>{txt}</span>
                    <h2 style={{ color: '#12F7D6' }}>Hello!</h2>
                    <p>My goal is to use my programming and data science skills to create solutions that enhance user experiences.</p>
                    <p>I have gained valuable hands-on experience in building web applications, notably developing an eLearning platform and a real-time chat application, both showcasing my ability to integrate complex technologies and ensure scalability.</p>
                    <p>In addition to my technical expertise, I am dedicated to continuous learning and problem-solving, as evidenced by my accomplishments in competitive programming.</p>
                    <span style={{ color: '#12F7D6' }}>{txt1}</span>
                </div>
            </div>
    )
} export default AboutmeBox; 