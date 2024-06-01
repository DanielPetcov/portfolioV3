import '../../../style/body/greeting/greeting.css'

export default function Greeting(){
    return <div className="greeting-container" id='greeting'>
        <div className="greeting">
            <h1>Hi, 
                <br />
                I'm <span>Daniel</span>
                <br />
                Software Developer 
            </h1>
        </div>
        <div className="greeting-img">
            <div className="frame"></div>
            {/* <img src="/src/assets/me.jpg" alt="photo with me" /> */}
        </div>
    </div>
}