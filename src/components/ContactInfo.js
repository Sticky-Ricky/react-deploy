import Style from './ContactInfo.module.css'

function ContactInfo(props){
    return(
        <div className={Style.info}>
            <div className={Style.logo}>{props.children}</div>
            <p className={Style.title}>{props.text}</p> 
            <p>{props.desc}</p>
            <a className={Style.link} href="www.linkedin.com/in/ericAhesse" target="_blank">{props.link}</a>
            <p>{props.subDesc}</p>
            
        </div>
    )
}

export default ContactInfo;