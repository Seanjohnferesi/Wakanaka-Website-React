import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";import "../styles/floats.css"
import "../styles/social.css"

function SocialMedia() {
    return (
        <section className="side-icons">
            <div>
                <FontAwesomeIcon icon={faWhatsapp} className='icon1'/>
            </div>

            <div>
                <FontAwesomeIcon icon={faInstagram} className='icon2' />
            </div>

            <div>
                <FontAwesomeIcon icon={faFacebookF} className='icon3' />
            </div>
        </section>
    )
}

export default SocialMedia