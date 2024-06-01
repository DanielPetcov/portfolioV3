export default function Project(props){
    return <div className="project">
        <div className="project-title">{props.title}</div>
        <div className="project-about">
            <div className="project-link">
                <a href={props.link}>
                    <img src={props.img_src} alt="img" />
                </a>
            </div>
            <div className="project-description">
                {props.description.map(e => {
                    return <p>{e}</p>
                })}
                <ul>
                    {props.tech.map((e) => {
                        return <li>{e}</li> 
                    })}
                </ul>
            </div>
        </div>
    </div> 
}