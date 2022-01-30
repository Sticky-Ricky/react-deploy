import Styles from './Contact.module.css'
import ContactInfo from '../components/ContactInfo'
import { MdEmail } from "react-icons/md"
import { AiFillLinkedin } from "react-icons/ai"
import { FaLocationArrow } from "react-icons/fa"



function ContactPage(props){
    return <div id={props.id} className={Styles.contact}>
        <h1 className="sectionTitle">Contact</h1>
        <h2 className={Styles.subTitle}>I'd Love To Connect With You.</h2>
        <h3>Feel free to send any thoughts or questions.</h3>

        <div className={Styles.row}>
            <div className={Styles.contactInfo1}>
                <ContactInfo text="Location" desc="Clifton, VA" subDesc="20124 US">
                    <FaLocationArrow size={50}/>
                </ContactInfo>
            </div>
            <div className={Styles.contactInfo1}>
                <ContactInfo text="Email" desc="erichesse23@gmail.com">
                    <MdEmail size={50}/>
                </ContactInfo>
            </div>
            <div className={Styles.contactInfo2}>
                <ContactInfo text="Connect" link="LinkedIn Profile">
                    <AiFillLinkedin size={50}/>
                </ContactInfo>
            </div>

        </div>

    </div>
}

export default ContactPage;