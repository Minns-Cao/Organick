import Button from "../../components/Button/Button";
import CardType1 from "../../components/CardType1/CardType1";
import BannerSubcribe from "../../layout/BannerSubcribe/BannerSubcribe";

import food1 from "../../assets/image/home_food1.jpg";
import food2 from "../../assets/image/Home_food2.png";

import "./Home.css";
const Home = () => {
  return (
    <>
      <div id="home">
        <section className="bannerTop">
          <div className="wapper">
            <div className="boxContent">
              <div className="leftSide">
                <p className="text-ytail">100% Natural Food</p>
                <h1 className="heading h1">
                  Choose the best healthier way of life
                </h1>
                <Button option={2}>Explore Now</Button>
              </div>
              <div className="rightSide"></div>
            </div>
          </div>
        </section>
        <section className="cardList">
          <div className="wapper">
            <div className="boxContent">
              <CardType1
                color1="white"
                text1="Natural!!"
                color2="white"
                text2="Get Garden Fresh Fruits"
                img={food1}
              ></CardType1>
              <CardType1
                color1="#7EB693"
                text1="Offer!!"
                color2="var(--mossGreen)"
                text2="Get 10% off
on Vegetables"
img={food2}
              ></CardType1>
            </div>
          </div>
        </section>
        <BannerSubcribe />
      </div>
    </>
  );
};

export default Home;
