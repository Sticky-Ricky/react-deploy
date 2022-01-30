import Card from '../components/Card'
import ProjectInfo from '../components/ProjectInfo'
import { GoCircuitBoard } from "react-icons/go"
import { AiFillLock } from "react-icons/ai";
import { IoMdGitNetwork } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { BsFillTerminalFill } from "react-icons/bs";
import { GiChisel } from "react-icons/gi";
import { GiBulletBill } from "react-icons/gi";
import { AiFillCloud } from "react-icons/ai";
import Styles from './Project.module.css'
import { SiFreelancer } from "react-icons/si";


function ProjectsPage(props){
    return <div id= {props.id} className={Styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <h1 className={Styles.header}>
            These are a select bunch of projects I have completed in my academic and professional career
        </h1>
        <div className={Styles.grid}>
            <div className={Styles.row}>
                <div className={Styles.col1}>
                    <Card>
                        <ProjectInfo text="MIPS32 Assembler" desc= "Implemented an assembler that supported translation of MIPS32 assembly language to machine code.">
                            <GoCircuitBoard size={60}/>
                        </ProjectInfo>
                    </Card>
                </div>
                <div className={Styles.col2}>
                <Card>
                    <ProjectInfo text="Personal Secure Server" desc="Used principles of internetwork communication (HTTP/ TCP) along with JSON Web Tokens to implement a basic concurrent server.">
                        <AiFillLock size={60}/>
                    </ProjectInfo>
                </Card>
                </div>
                <div className={Styles.col3}>
                <Card>
                    <ProjectInfo text="Threadpool" desc="Created a small fork/join framework that allows the parallel execution of divide-and-conquer algorithms.">
                        <IoMdGitNetwork size={60}/>
                    </ProjectInfo>
                </Card>
                </div>
            </div>
            <div className={Styles.row}>
                <div className={Styles.col1}>
                <Card>
                    <ProjectInfo text="Personal Website" desc="The website that you are currently on. Fully built with React.">
                        <CgWebsite size={60}/>
                    </ProjectInfo>
                </Card>
                </div>
                <div className={Styles.col2}>
                <Card>
                    <ProjectInfo text="Custom Shell" desc="Developed simple job control shell similar to the functionality implement by BASH.">
                        <BsFillTerminalFill size={60}/>
                    </ProjectInfo>
                </Card>
                </div>
                <div className={Styles.col3}>
                <Card>
                    <ProjectInfo text="WebScraper" desc="Tool made using python with the goal of analyzing and comparing technology products on Newegg.">
                        <GiChisel size={60}/>
                    </ProjectInfo>
                </Card>      
                </div>
            </div>
            <div className={Styles.row}>
                <div className={Styles.col1}>
                <Card>
                    <ProjectInfo text="Bullet Game" desc="2D bullet game (think of asteroid) built with unity.">
                        <GiBulletBill size={60}/>
                    </ProjectInfo>
                </Card>
                </div>
                <div className={Styles.col2}>
                <Card>
                    <ProjectInfo text="AWS Cloud" desc="Project determined to transfer web content in databases to the AWS cloud. Worked mainly with REST APi's, AWS Lambda, and AWS EC2.">
                        <AiFillCloud size={60}/>
                    </ProjectInfo>
                </Card>
                </div>
                <div className={Styles.col3}>
                <Card>
                    <ProjectInfo text="Freelance Developer" desc="Currently working as a tech lead for a startup ecommerce business based in Brazil.">
                        <SiFreelancer size={60}/>
                    </ProjectInfo>
                </Card>
                </div>
            </div>
        </div>

        
        
        
        

    </div>;
}

export default ProjectsPage;