import classes from './Splash.module.css'
import Typist from 'react-typist'

const words = ['A Software Developer', 'An Innovative Designer', 'A Math Enthusiast', 'An Ambitous Learner'];

for (let i = 4; i < 400; i++) {
	words[i] = words[i - 4];
}

function Splash(){
return <div className = {classes.splash}>
    <section className = {classes.section}>
        <p className={classes.intro}> Hey, I'm Eric Hesse</p>
        <Typist>
			{words.map((word, i) => (
				<span className = {classes.rotate} key={word}>
					{word}
					<Typist.Backspace
						count={word.length}
						delay={(i + 1) * 400}
					/>
				</span>
			))}
		</Typist>

    </section>
</div>
}

export default Splash;