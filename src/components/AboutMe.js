import classes from './AboutMe.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
/**import Styles from './react-tabs.module.css';**/
import SkillBars from './SkillBars';

const SKILLS = [
    {type: "C", level: 4},
    {type: "Java", level: 4},
    {type: "Python", level: 3},
    {type: "HTML/CSS/JS", level: 3},
    {type: "Amazon Web Services", level: 3},
    {type: "Ruby/Rust", level: 2},
    {type: "Unity/C++", level: 2},
    {type: "Haskell/Prolog/MATLAB", level: 2}
];

function About(props){
return <div id={props.idA} className = {classes.div}>
    <section className = {classes.left}>
        <img className= {classes.img} src= "https://i.insider.com/5d6822bc2e22af24f965daf4?width=2000&format=jpeg&auto=webp" alt="Personal"/>
        <div className={classes.buttonRow}>
            <a href= "#contact">
                <button className = {classes.b1}>
                    Hire Me
                </button>
            </a>
            <a title="CV" href="EricHesseResume.pdf" >
                <button className = {classes.b2}>
                    Download CV
                </button>
            </a>
            
        </div>
    </section>
    <section className = {classes.right}> 
        <h1 className='sectionTitle'> About Me</h1>
        <p className = {classes.intro}> 
            I am computer science student currently enrolled at Virginia Tech. I am set to graduate with a B.A. in Computer Science in May 2022. My primary interest lies in machine learing and software engineering to help solve complex problems in cutting edge systems across the public and private sector.
        </p>
            <Tabs>
                <TabList>
                    <Tab>Target</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Skills</Tab>
                    <Tab>Education</Tab>
                </TabList>

                <TabPanel>
                    <p>Currently, I'm seeking a full time software engineer/Web Development position. If you think I'm a good fit, please contact me.</p>
                </TabPanel>
                <TabPanel>
                    <p className={classes.text}>Web Devlopment Intern .......................... CACI, 2020</p>
                    <p className={classes.text}>Production Technician .......................... Virginia Tech, 2018-2020</p>
                    <p className={classes.text}>Hackathon .......................... Virginia Tech, 2020</p>
                    <p className={classes.text}>Cybersecurity Club .......................... Virginia Tech, 2018-2020</p>
                </TabPanel>
                <TabPanel>
                    <div>
                        <SkillBars hue="200" saturation="40" skills={SKILLS} />,
                    </div>
                </TabPanel>
                <TabPanel>
                    <p>Virginia Tech .......................... Blacksburg, VA</p>
                    <p>West Springfield High School .......................... Springfield, VA</p>
                    <p className={classes.text2}>Relevant Coursework:</p>
                    <p>Machine Learning - Differential Equations - Data & Algortihm Analysis - GUI Programming and Graphics - Cryptography - Computer Systems - Computer Organization - Human Computer Interaction - Probability and Statistcs - Data Structures and Algorithms - Combinatorics - Discrete Mathematics - Linear Algebra - Multivariable Calculus</p>
                </TabPanel>
            </Tabs>
        
    </section>
</div>
}

export default About;