import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineGooglePlus, AiOutlineYoutube } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

import "./index.css";

const Footer = () => (
  <div className="footer-main-container">
    <div className="footer-home-container">
      <div className="footer-top-section">
        <ul className="footer-top-item">
          <li className="footer-main-heading bold-txt">PURPLLE</li>
          <li className="footer-sub-heading">About us</li>
          <li className="footer-sub-heading">Our Team</li>
          <li className="footer-sub-heading">Careers</li>
          <li className="footer-sub-heading">Press</li>
          <li className="footer-sub-heading">Sitemap</li>
          <li className="footer-sub-heading">Compliance</li>
        </ul>
        <ul className="footer-top-item">
          <li className="footer-main-heading bold-txt">PURPLLE BUSINESS</li>
          <li className="footer-sub-heading">Sell on Purplle</li>
        </ul>
        <ul className="footer-top-item">
          <li className="footer-main-heading bold-txt">POLICY INFO</li>
          <li className="footer-sub-heading">Privacy Policy</li>
          <li className="footer-sub-heading">Terms of Use</li>
          <li className="footer-sub-heading">Return & Cancellation Policy</li>
        </ul>
        <ul className="footer-top-item">
          <li className="footer-main-heading bold-txt">PURPLLE</li>
          <li className="footer-sub-heading">FAQ's</li>
          <li className="footer-sub-heading">Contact us</li>
        </ul>
      </div>
      <div className="hr-line-footer"></div>

      <div className="footer-top-section">
        <div className="footer-mid-item">PAYMENT</div>
        <div className="footer-mid-item">
          <img
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg"
            alt=""
          />
        </div>
        <div className="footer-mid-item">CONNECT</div>

        <div className="footer-mid-item">
          <div className="fb facebook">
            <h2>
              <FiFacebook style={{ color: "white" }} />
            </h2>
          </div>
          <div className="fb twitwer">
            <h2>
              <CiTwitter style={{ color: "white" }} />
            </h2>
          </div>
          <div className="fb google">
            <h2>
              <AiOutlineGooglePlus style={{ color: "white" }} />
            </h2>
          </div>
          <div className="fb po">
            <h1
              style={{
                fontStyle: "italic",
                color: "white",
                fontSize: "19px",
                paddingBottom: "12px",
              }}
            >
              p
            </h1>
          </div>
          <div className="fb mail">
            <h1>
              <GoMail
                style={{ color: "white", paddingBottom: "4px" }}
                size={20}
              />
            </h1>
          </div>
          <div className="fb youtube google">
            <h1>
              <AiOutlineYoutube
                style={{ color: "white", paddingBottom: "4px" }}
                size={20}
              />
            </h1>
          </div>
          <div className="fb insta">
            <h2>
              <BiLogoInstagram style={{ color: "white", paddingTop: "2px" }} />
            </h2>
          </div>
          <div className="fb linkdin">
            <h2>
              <BiLogoLinkedin style={{ color: "white", paddingTop: "2px" }} />
            </h2>
          </div>
        </div>
      </div>

      <div className="footer-lower-container">
          <p>Copyright <span>2020 Purplle. All Rights Reserved.</span></p>
        </div>
        
    </div>
  </div>
);
export default Footer;
