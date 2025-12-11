import headerImg from "../images/background/shells.jpg"
import headerImg2 from "../images/background/plant-bg.jpg"
import headerImg3 from "../images/background/sandles.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/floats.css"

function SocialMedia() {
    return (
        <section className="side-imgs">
            <div className="float">
                <img src={headerImg} alt="" />
            </div>

            <div className="float2">
                <img src={headerImg2} alt="" />
            </div>

            <div className="float3">
                <img src={headerImg3} alt="" />
            </div>
        </section>
    )
}

export default SocialMedia