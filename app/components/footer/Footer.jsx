"use client"

import './footer.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo ">
                    <Link href="/">
                    
                    <img src="./images/logo.png" alt="logo" className='m-auto' />
                    </Link>
                </div>
                <p className="footer__description font-Resolve">
                Zenith Eclipse is a leading international trading and logistics company, offering comprehensive solutions for global markets. Our expertise extends to air charter services and ocean transport, ensuring safe, efficient, and reliable delivery of goods worldwide. We collaborate with fully licensed and certified air carriers and shipping operators, adhering to international aviation and maritime regulations. Zenith Eclipse does not operate aircraft or vessels directly; all services are provided through trusted third-party carriers, fully insured for cargo  safety. Our operations strictly comply with European Union, U.S., and international laws to maintain the highest standards of safety and reliability.
                </p>
                <section className="footer__links font">
                    <h2 className="footer__links-title">
                        Useful links
                    </h2>
                    <ul className="footer__links-list ">

                        <li className="footer__links-item"><Link href="/about" className="footer__link">About Us</Link></li>
                        <li className="footer__links-item"><Link href="/ContactUs" className="footer__link">Contact Us</Link></li>
                        <li className="footer__links-item"><Link href="/" className="footer__link">Partnership</Link></li>
                        <li className="footer__links-item"><Link href="/" className="footer__link">FAQ</Link></li>
                        <li className="footer__links-item"><Link href="/" className="footer__link">Blogs</Link></li>
                    </ul>
                </section>
                {/* https://www.facebook.com/profile.php?id=61557081655148 */}
                <section className="footer__cta">
                    <h2 className="footer__cta-title ">Subscribe to Our Newsletter</h2>
                    <form action="/" className="footer__form">
                        <input type="email" placeholder="Your Email Address" required name="email" id="email" className="footer__from-input font-Resolve" />
                        <button type="submit" className="footer__form-button "><img src="./images/send.svg" alt="send icon" /></button>
                    </form>
                    <ul className="footer__social-medias">
                        <li className="footer__social-media-item"> <Link href="https://www.facebook.com/profile.php?id=61557081655148" className="footer__social-media-link"><img src="./images/facebook.svg" alt="facebook icon" /></Link> </li>
                        <li className="footer__social-media-item"> <Link href="https://www.instagram.com/zenitheclipseco" className="footer__social-media-link"><img src="./images/insta.svg" alt="instagram icon" /></Link> </li>
                        <li className="footer__social-media-item"> <Link href="https://wa.me/message/N2CUPIWILQ63K1" className="footer__social-media-link"><img src="./images/whatsapp.svg" alt="whatsapp icon" /></Link> </li>
                        <li className="footer__social-media-item"> <Link href="https://x.com/Zenitheclipseco?t=TP0eSWCmzPwC2xCjyYVItg&amp;s=09" className="footer__social-media-link"><img src="./images/twiiter.svg" alt="twitter icon" /></Link> </li>
                    </ul>
                </section>
            </div>
            <hr className="footer__divider" />
            <p className="footer__copyright font-Resolve my-3">
                &copy; Zenith Eclipse All rights reserved.
            </p>
        </footer>
    )
}
export default Footer
