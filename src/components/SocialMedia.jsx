import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import "../styles/social.css"

function SocialMedia() {
    return (
        <section className="side-icons">
            <div>
                <a href="https://wa.me/message/M5NHR5KQTL52H1">
                    <FontAwesomeIcon icon={faWhatsapp} className='icon1'/>
                </a> 
            </div>

            <div>
                <a href="https://www.instagram.com/wakanaka_beautyparlour?igsh=YW14NXpweTd5aGVq">
                    <FontAwesomeIcon icon={faInstagram} className='icon2' />
                </a>
            </div>

            <div>
                <a href="https://www.facebook.com/share/1A824gSqeu/">
                    <FontAwesomeIcon icon={faFacebookF} className='icon3' />
                </a>
            </div>
        </section>
    )
}

export default SocialMedia