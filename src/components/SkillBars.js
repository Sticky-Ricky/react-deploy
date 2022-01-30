import React from 'react';
import Styles from './SkillBars.module.css'

class SkillBars extends React.Component {
    constructor(props) {
      super(props);
      this.state = { collapsed: true };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ collapsed: false });
      }, 3000);
    }
  
    render() {
      const { hue, saturation, skills } = this.props;
  
      return (
        <div id="app" className={Styles.container}>
          <ul className={Styles.skills}>
            {skills.map((skill, index) => (
              <li className={Styles.skills}
                key={skill.type}
                style={{
                  width: `${skill.level * 20}%`,
                  backgroundColor: `hsl(${hue}, ${saturation}%, ${
                    100 / (index + 3.5)
                  }%)`
                }}
              >
                <p>
                  {skill.type}
                  <span>{skill.level}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default SkillBars;