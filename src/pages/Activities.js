import Styles from './Activities.module.css'
import ActivitiesInfo from '../components/ActivitiesInfo'

function ActivitiesPage(props){
    return <div id={props.id} className={Styles.activitiesDiv}>
        <h1 className="sectionTitle">Activities</h1>
        <h2 className={Styles.header}>Positions & Events during my undergrad</h2>
        <div className={Styles.activities}>
            <ActivitiesInfo title="Cybersecurity Club" subTitle="Member - Virginia Tech - 2018-2020" desc="Learned and practicied cybersecurity principles (Reverse engineering, Cryptograopgy, Brute Force attacks). Club engaged in CTF events across different universities."/>
            <ActivitiesInfo title="Granata Lab" subTitle="Trial Participant - Virginia Tech - 2019" desc="Participated in biomechanics study looking at force vectors created by the human body when jumping and moving. The study worked to address ways to prevent knee and ankle injuries through changes in ones biomechanics"/>
            <div className = {Styles.linkDiv} >
                <a className = {Styles.link} href= "https://www.granatalab.beam.vt.edu/index.php/projects/limb-loading-asymmetry-during-daily-functional-tasks/" target="_blank" rel="noreferrer">Study</a>
            </div>
            <ActivitiesInfo title="Sigma Phi Delta Professional Engineering Fraternity" subTitle="Member - Virginia Tech - 2021-2022" desc="Worked with other engineering students on projects and tasks related to differing disciplines of engineering."/>
            <ActivitiesInfo title="Intramural Sports" subTitle="Advid Member - Virginia Tech - 2018-2022" desc="Played and captained mutiple teams across a variety of different sports."/>
        </div>
    </div>
}

export default ActivitiesPage;