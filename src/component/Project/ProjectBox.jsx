

import React, { useState } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

const ProjectBox = (Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='project-box'>
            <img src='./lee-campbell-DtDlVpy-vvQ-unsplash.jpg' className='project-img' alt='Project'></img>
            <div className='project-disc'>
                <h1 style={{ color: '#12F7D6' }}>{Props.title}</h1>
                <p>
                    {isExpanded ? Props.description : `${Props.description.substring(0, 300)}...`}
                </p>
                <a 
                    style={{ color: '#12F7D6', borderBottom: 'solid 1px white', cursor: 'pointer', display: 'block', marginBottom: '2rem' }} 
                    onClick={toggleReadMore}
                >
                    {isExpanded ? 'Read less <<' : 'Read more >>'}
                </a>
                <Link className='project-link-box-btn' to={Props.githubLink} target="_blank">
                    GitHub Link
                </Link>
            </div>
        </div>
    );
}

export default ProjectBox;

