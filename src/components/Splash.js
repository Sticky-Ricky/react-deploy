import classes from './Splash.module.css'
import Typist from 'react-typist'

function Splash(){
return <div className = {classes.splash}>
    <section className = {classes.section}>
        <p className={classes.intro}> Hey, I'm Eric Hesse</p>
        <Typist>
            <Typist.Delay ms={500} />
            <p className = {classes.rotate}> A Software Developer </p>
            <Typist.Backspace count={21} delay={500} />
            <p className = {classes.rotate}> An Innovative Designer </p>
            <Typist.Backspace count={23} delay={500} />
            <p className = {classes.rotate}> A Math Enthusiast </p>
            <Typist.Backspace count={18} delay={500} />
            <p className = {classes.rotate}> An Ambitous Learner </p>
            
        </Typist>
    </section>
</div>
}

export default Splash;