import Style from './ActivitiesInfo.module.css'

function ActivitiesInfo(props){
    return(
        <div className={Style.info}>
            <h3 className={Style.title}>{props.title}</h3> 
            <h4 className = {Style.subTitle}>{props.subTitle}</h4>
            <p className ={Style.desc}>{props.desc}</p>
        </div>
    )
}
export default ActivitiesInfo;