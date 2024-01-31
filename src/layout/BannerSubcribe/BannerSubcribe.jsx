import Button from "../../components/Button/Button";

import './BannerSubcribe.css';
const BannerSubcribe = () => {
  return (
    <div id="BannerSubcribe">
      <div className="wapper">
        <div className="boxContent">
          <div className="leftSide">
            <p className="heading h2 white">
              Subscribe to
              <br />
              our Newsletter
            </p>
          </div>
          <div className="rightSide">
            <input type="text" placeholder="Your Email Address"/>
            <Button>Subribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSubcribe;
