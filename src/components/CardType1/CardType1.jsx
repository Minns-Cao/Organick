
import './CardType1.css';
const CardType1 = ({color1, color2, text1, text2, img}) => {
  const color = {
    "--color1": color1,
    "--color2": color2,
  };
  

  return (
    <div id='CardType1'>
      <img src={img} alt="" />
      <div className="content" style={color}>
        <p className="text-ytail">{text1}</p>
        <h3 className="heading h3">{text2}</h3>
      </div>
    </div>
  )
}

export default CardType1