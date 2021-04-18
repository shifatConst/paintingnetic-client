import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Home" , link: "/emergency"},
        {name: "About Us" , link: "/checkup"},
        {name: "Dashboard" , link: "/personal-treatment"},
        {name: "Blog" , link: "/tooth-extract"},
        {name: "Logout" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Book" , link: "/emergency"},
        {name: "Book" , link: "/checkup"},
        {name: "Residential Interior" , link: "/personal-treatment"},
        {name: "Extraction" , link: "/tooth-extract"},
        {name: "Test" , link: "/checkup"},
    ]
    const services = [
        {name: "Residential Interior" , link: "/emergency"},
        {name: "Residential Exterior" , link: "/checkup"},
        {name: "Commercial Painting" , link: "/personal-treatment"},
        {name: "Wallpaper Removal" , link: "/tooth-extract"},
        {name: "Water Damage Repair" , link: "/checkup"},
        {name: "Drywall Installation" , link: "/checkup"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Options"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand btn-text">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;