import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "eLearning Platform",
        description: "The eLearning platform you developed in June 2024 is a comprehensive web application built using React, CSS, JavaScript, Node.js, and MongoDB, designed for scalability, security, and usability. It allows users to register and log in using JWT authentication, ensuring secure access to different functionalities based on roles, such as students, instructors, and administrators. The platform provides an intuitive, responsive dashboard where students can view, enroll in, and track progress in courses, while instructors can create, update, and manage course content through seamless CRUD operations. MongoDB, with Mongoose as the ODM, efficiently handles user data, course information, and progress tracking. The platform features protected routes for secure data access and is optimized for use across various devices, thanks to responsive design principles. Real-time feedback and error handling improve user experience by guiding users through tasks and ensuring smooth operations. Future scalability has been ensured with a flexible backend architecture, allowing for potential expansion to include collaborative tools, analytics, and third-party integrations.",
        link : "https://github.com/Avinash365/eLearning"
        // Add more properties as needed
    },
    {
        id: 2,
        title: "Real-Time Chat Application",
        description: "In October 2023, you developed a real-time chat application using JavaScript, React, and Node.js, with Socket.IO integrated to enable instant message exchange between users. The frontend, built with React, provides a dynamic interface for sending and receiving messages in real time, while Socket.IO ensures smooth, bidirectional communication. The backend, powered by Node.js and MongoDB with Mongoose, handles data efficiently and allows the app to scale for more users. The application is designed with responsive UI principles, ensuring a consistent user experience across various devices.",
        link :"https://github.com/Avinash365/ICHAT3"
        // Add more properties as needed
    },
    {
        id: 3,
        title: "Project 3",
        description: "coming soon....",
        link:'https://github.com/Avinash365/ICHAT3'
        // Add more properties as needed
    },
    // Add more project objects as needed
]; 
export default projects;

