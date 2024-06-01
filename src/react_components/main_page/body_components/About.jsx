import '../../../style/body/about/about.css'
import penguin_img from '../../../assets/giphy.webp'

export default function About(){
    return<>
        <div className="about" id='about'>
            <div className="about-description">
                <h2>&lt;/About me&gt;</h2>
                <div className="text">
                    <p>I am a young student at the TUM university of Moldova and I am very passionate about my work. 
                        I always loved computers and everything about them, that's what made me to start my journey in Computer Science</p>
                        <br />
                    <p>I love algorithms, design and new technologies, that's why I can do both Front-end and Back-end development</p>
                </div>
            </div>
            <div className="about-img">
                <img src={penguin_img} alt="penguin codding" />
            </div>
        </div>
    </> 

}