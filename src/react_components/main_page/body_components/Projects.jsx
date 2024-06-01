import '../../../style/body/projects/projects.css'
import Project from './project'
import to_do_img from '../../../assets/todo.png'

export default function Projects(){
    // HERE YOU CAN ADD NEW PROJECTS, just try to respect the order
    const projects_obj = {
        ob1: ["To Do App", //title
        "https://to-do-app-theta-teal.vercel.app/", //link
        to_do_img, //img src
        ["Description:", 
        "Basic To-Do-App, with some beautiful animations.",
        "The technologies that has been used, are:"],  // description
        ["HTML", "CSS", "JavaScript", "React"]], // core technologies
        // ob2: ["To Do App", //title
        // "https://to-do-app-theta-teal.vercel.app/", //link
        // "src/assets/todo.png", //img src
        // ["Description:", 
        // "Basic To-Do-App, with some beautiful animations.",
        // "The technologies that has been used, are:"],  // description
        // ["HTML", "CSS", "JavaScript", "React"]], // core technologies
    }

    const renderProjects = (projects_obj) =>{
        let projects_arr = [];
        let i = 1;
        for(const key in projects_obj){
            const list = projects_obj[key]
            projects_arr.push(<Project 
                title={list[0]} 
                link={list[1]}
                img_src={list[2]}
                description={list[3]}
                tech={list[4]} 
                key={i}/>)
            i++; 
        }
        return projects_arr;
    }

    return <div className="projects-container" id='projects'>
        <h3><span>Projects</span>, the list is going to grow...</h3>
        <div className='projects-links'>
            {renderProjects(projects_obj).map((e) => {
                return e;
            })}
        </div>
    </div>
}