import '../../../style/body/skills/skills.css'

export default function Skills(){
    return <div className="skills-container" id='skills'>
        <div className="skills">
            <h3>Core Skills</h3>
            <div className='skill'>
                <h4>Web Technologies:</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>
            <div className='skill'>
                <h4>Programming Languages:</h4>
                <ul>
                    <li>Python</li>
                    <li>C</li>
                    <li>C++</li>
                </ul>
            </div>
            <div className='skill'>
                <h4>Soft Skills:</h4>
                <ul>
                    <li>Able to work in team</li>
                    <li>Active listener.</li>
                    <li>Flexibility in adjusting to new situations, challenges and changes</li>
                    <li>Building and maintaining professional relationships.</li>
                    <li>B2 English level </li>
                </ul>
            </div>
        </div>
    </div>
}