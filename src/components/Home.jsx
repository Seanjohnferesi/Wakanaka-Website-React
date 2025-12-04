import logo from "../images/logo/make the high-qualit.png" 
import headerImg from "../imges/background/shells.jpg"
import headerImg2 from "../imges/background/plant-bg.jpg"
import headerImg3 from "../imges/background/sandles.jpg"
import socialIcon1 from "../images/icons/at.jpg"
import socialIcon2 from "../images/icons/instagram.jpg"
import socialIcon3 from "../images/icons/social-media.jpg"


export default function Home() {
    return(
        <body>
            <header>
                <div class="lft-header-flex">
                    <h1>Wakanaka</h1>
                    <img src={logo} alt="header logo" />
                </div>
                
                <nav>
                    <ul class="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
            <section class="landing-page" id="home">
                <div class="logo">
                        <img src={logo} alt="wakanaka logo" />
                        <h1>Wakanaka</h1>
                        <h2>Beauty Parlour</h2>
                        <div class="explore-btn">
                            <button>Explore</button>
                            <span class="arrow">&#10549;</span>
                        </div>
                        
                </div>

                <section class="side-imgs">
                    <div class="float">
                        <img src={headerImg} alt="" />
                    </div>

                    <div class="float2">
                        <img src={headerImg2} alt="" />
                    </div>

                    <div class="float3">
                        <img src={headerImg3} alt="" />
                    </div>
                    
                </section>
            </section>
    
        <footer id="contact">
                <div class="footer-logo">
                    <h1>Wakanaka</h1>
                    <img src="images/logo/make the high-qualit.jpg" alt="">
                </div>

                <div class="divider"></div>

            <div class="form-flex">
                <form action="">
                    <div class="name-email-flex">
                        <div class="name-input">
                            <label for="user-info">Name & Surname</label>
                            <input type="text" name="user-name" id="name" required />
                        </div>

                        <div class="email-input">
                            <label for="user-email">Email Address<Address></Address></label>
                            <input type="email" name="user-email" id="email" required />
                        </div>

                    </div>
                    
                    <div class="feedback-input">
                        <label for="user-feedback">Feedback</label>
                        <textarea name="user-feedback" id="feedback"></textarea>
                    </div>

                    <div class="submit">
                        <button type="button" class="submit-btn">
                            <span class="text">SEND</span>
                            <span class="icon">&#9997;</span>
                        </button>
                    </div>
                </form>

                <div class="footer-info-flex">
                        <div class="info-wrapper">
                            <div class="ftr-info">
                                <h3 class="contact">Contact</h3>
                                <p class="ftr-email">patieysatiey@gmail.com</p>
                                <p>Tel: +27 62 698 8107</p>
                                <p>10 Fiona Crescent,</p>
                                <p>Brooklyn, Cape Town</p>
                            </div>

                            <div class="ftr-info-2">
                                <h3 class="quick-links">Quick Links</h3>
                                <ul class="footer-links">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#about">About</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="social-media">
                            <div class="email">
                                <img src={socialIcon1} alt="" />
                            </div>

                            <div class="insta">
                                <img src={socialIcon2} alt="" />
                            </div>

                            <div class="facebook">
                                <img src={socialIcon3} alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
</body>
    )
}


