import '../../style/footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const instagram_link = 'https://www.instagram.com/daniel_petcov?igsh=MThsNjNza3NyMzlhcA%3D%3D&utm_source=qr';
const facebook_link = 'https://www.facebook.com/dan.petcov.3?mibextid=LQQJ4d';
const github_link = 'https://github.com/DanielPetcov';
const likedIn_link = 'https://www.linkedin.com/in/petcov-daniel-431052288/';

export default function Footer(){
    return <div className="footer" id='footer'>
            <span className='credits'>@2024 DANIEL PETCOV</span>
            <div className='contacts'>
                <ul>
                    <li><a href={instagram_link} target='_blank'><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href={facebook_link} target='_blank'><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href={github_link} target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href={likedIn_link} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
    </div>
}