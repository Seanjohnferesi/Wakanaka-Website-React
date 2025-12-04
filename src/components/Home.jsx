import logo from "../images/logo/make the high-qualit.png" 
import headerImg from "../images/background/shells.jpg"
import headerImg2 from "../images/background/plant-bg.jpg"
import headerImg3 from "../images/background/sandles.jpg"
import socialIcon1 from "../images/icons/at.png"
import socialIcon2 from "../images/icons/instagram.png"
import socialIcon3 from "../images/icons/social-media.png"
import "../styles/styles.css"


export default function Home() {
    return(
        <>
            <header>
                <div className="lft-header-flex">
                    <h1>Wakanaka</h1>
                    <img src={logo} alt="header logo" />
                </div>
                
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
            <section className="landing-page" id="home">
                <div className="logo">
                        <img src={logo} alt="wakanaka logo" />
                        <h1>Wakanaka</h1>
                        <h2>Beauty Parlour</h2>
                        <div className="explore-btn">
                            <button>Explore</button>
                            <span className="arrow">&#10549;</span>
                        </div>
                        
                </div>

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
            </section>
    
        <footer id="contact">
                <div className="footer-logo">
                    <h1>Wakanaka</h1>
                    <img src={logo} alt="flower icon" />
                </div>

                <div className="divider"></div>

            <div className="form-flex">
                <form action="">
                    <div className="name-email-flex">
                        <div className="name-input">
                            <label >Name & Surname</label>
                            <input type="text" name="user-name" id="name" required />
                        </div>

                        <div className="email-input">
                            <label >Email Address</label>
                            <input type="email" name="user-email" id="email" required />
                        </div>

                    </div>
                    
                    <div className="feedback-input">
                        <label >Feedback</label>
                        <textarea name="user-feedback" id="feedback"></textarea>
                    </div>

                    <div className="submit">
                        <button type="button" className="submit-btn">
                            <span className="text">SEND</span>
                            <span className="icon">&#9997;</span>
                        </button>
                    </div>
                </form>

                <div className="footer-info-flex">
                        <div className="info-wrapper">
                            <div className="ftr-info">
                                <h3 className="contact">Contact</h3>
                                <p className="ftr-email">patieysatiey@gmail.com</p>
                                <p>Tel: +27 62 698 8107</p>
                                <p>10 Fiona Crescent,</p>
                                <p>Brooklyn, Cape Town</p>
                            </div>

                            <div className="ftr-info-2">
                                <h3 className="quick-links">Quick Links</h3>
                                <ul className="footer-links">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#about">About</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="social-media">
                            <div className="email">
                                <img src={socialIcon1} alt="email icon" />
                            </div>

                            <div className="insta">
                                <img src={socialIcon2} alt="instagram icon" />
                            </div>

                            <div className="facebook">
                                <img src={socialIcon3} alt="facebook icon" />
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
</>
    )
}


