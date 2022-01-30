import Styles from './Footer.module.css'
import {SiHandshake} from "react-icons/si";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";



function FooterPage(props){
    return(
        <div id= {props.id} className={Styles.footer}>
            <div className={Styles.text}> Created by Eric Hesse @2022</div>
            <div className={Styles.links}>
                <ul className = {Styles.list}>
                    <li className = {Styles.left}>
                        <a href="https://github.com/Sticky-Ricky" target="_blank" rel="noreferrer"><AiFillGithub size={40}/></a>
                    </li>
                    <li className = {Styles.left}>
                        <a href="https://app.joinhandshake.com/stu/users/11756401" target="_blank" rel="noreferrer"><SiHandshake size={40}/></a>
                    </li>
                    <li className = {Styles.right}>
                        <a href="https://twitter.com/home" target="_blank" rel="noreferrer"><AiFillTwitterCircle size={40}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterPage;