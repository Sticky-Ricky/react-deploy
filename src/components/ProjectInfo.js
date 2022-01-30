import Style from './ProjectInfo.module.css'

function ProjectInfo(props){
    return(
        <div className={Style.info}>
            <div className={Style.logo}>{props.children}</div>
            <h1 className={Style.title}>{props.text}</h1> 
            <p>{props.desc}</p>
        </div>
    )
}

export default ProjectInfo;