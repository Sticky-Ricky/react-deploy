import Splash from '../components/Splash';
import About from '../components/AboutMe';


function HomePage(props){
    return <div className="Splash/AboutMe">
        <Splash/>
        <div className="spacer"/>
        <About idA={props.idA}/>
    </div>

}

export default HomePage;