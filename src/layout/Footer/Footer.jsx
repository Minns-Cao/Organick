import INFOMATION from "../../constant/info";

import logo from "../../assets/image/Logo.svg";
import insLogo from "../../assets/image/Icon_ins.svg";
import fbLogo from "../../assets/image/Icon_facebook.svg";
import twiiterLogo from "../../assets/image/Icon_twiiter.svg";
import pinLogo from "../../assets/image/Icon_pin.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wapper">
        <div className="boxContent">
          <div className="col">
            <h5 className="heading h5 text-end">Contact Us</h5>
            <div className="email hover2">
              <p className="text bold">Email</p>
              <a href={`mailto: ${INFOMATION.email}`} className="text block">
                {INFOMATION.email}
              </a>
            </div>
            <div className="phone hover_2">
              <p className="text bold">Phone</p>
              <a href={`phone: ${INFOMATION.phone}`} className="text block">
                {INFOMATION.phone}
              </a>
            </div>
            <div className="address hover_2">
              <p className="text bold">Address</p>
              <a href={`#!`} className="text block">
                {INFOMATION.address}
              </a>
            </div>
          </div>
          <div className="col">
            <div className="logoBox">
              <img src={logo} alt="" />
            </div>
            <span className="text-center text">
              Simply dummy text of the printing and typesetting industry.
              <br />
              Lorem Ipsum simply dummy text of the printing{" "}
            </span>
            <div className="socials">
              <a className="hover" href={INFOMATION.facebook} target="_blank" rel="noreferrer">
                <img src={insLogo} alt="" />
              </a>
              <a className="hover" href={INFOMATION.facebook} target="_blank" rel="noreferrer">
                <img src={fbLogo} alt="" />
              </a>
              <a className="hover" href={INFOMATION.github} target="_blank" rel="noreferrer">
                <img src={twiiterLogo} alt="" />
              </a>
              <a className="hover" href={INFOMATION.github} target="_blank" rel="noreferrer">
                <img src={pinLogo} alt="" />
              </a>
            </div>
          </div>
          <div className="col">
            <h5 className="heading h5 text-end">Utility Pages</h5>
            <p className="text hover_2">Style Guild</p>
            <p className="text hover_2">Password Protected</p>
            <p className="text hover_2">404 Not Found</p>
            <p className="text hover_2">Licences</p>
            <p className="text hover_2">Changelog</p>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p className="text text-center">
          Copyright © <span className="bold">Organick</span> | Designed by{" "}
          <span className="bold">VictorFlow</span> Templates - Powered by
          Webflow
        </p>
      </div>
    </footer>
  );
};

export default Footer;
