import './Project.css'
import Moduletitle from '../Moduletitle/Moduletitle';

import ProjectBox from './ProjectBox';

import projects from '../../container/projectinfo';


const Project = () => {  


 // Function to create a ProjectBox component for each project
 function createCard(project) {
    return (
        <ProjectBox  
            key={project.id} 
            title={project.title}
            description={project.description} 
            githubLink = {project.link}
            // Pass other properties as needed
        /> 
    );
}
    return (

        <div className='project-box1' id='project'>
            <Moduletitle Title='Project' txt='My thoughts on technology and business, welcome to subscribe' /> 
                <div className='scroll-box'>
                    {projects.map((project) => createCard(project))}
                </div>
        </div>
    )
}
export default Project; 