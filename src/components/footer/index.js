import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="main-section">
        <div className="heading-section">
          <div className="logo-name">
            <h1>Zomato</h1>
          </div>
          <div className="location-box">
            <div className="place box">
              <h3>India</h3>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className="lang box">
              <i class="fa-solid fa-globe"></i>
              <h3>English</h3>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="list-section">
          <div className="list-1">
            <h4>ABOUT ZOMATO</h4>
            <ul>
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relation</li>
              <li>Work Fraud</li>
              <li>Press Kit</li>
              <li>Contant Us</li>
            </ul>
          </div>
          <div className="list-2">
            <h4>ZOMAVERSE</h4>
            <ul>
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomaland</li>
            </ul>
          </div>
          <div className="double">
            <div className="list-3-1">
              <h4>FOR RESTURANTS</h4>
              <ul>
                <li>Partner With Us</li>
                <li>Apps For You</li>
              </ul>
            </div>
            <div className="list-3-2">
              <h4>FOR ENTERPRISE</h4>
              <ul>
                <li>Zomato For Enterprise</li>
              </ul>
            </div>
          </div>
          <div className="list-4">
            <h4>LEARN MORE</h4>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="social-list">
            <h4>SOCIAL LINKS</h4>
            <div className="social-media">
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="description-section">
          <p>
            This website is developed for the educational purpose. This is not
            the official website of Zomato, it is a reference website of Zomato.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
