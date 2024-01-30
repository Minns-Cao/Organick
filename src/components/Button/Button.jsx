import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  let { children, option } = props;

  if (option == 1) {
    option = "Style1";
  } else if (option == 2) {
    option = "Style2";
  } else if (option == 3){
    option = "Style3";
  } else {
    option = "Pagi";
  }

  return (
    <div className={`Button ${option}`}>
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
        <path
          d="M9.47592 6.12891L12.8705 9.19342L9.47592 12.2579M12.399 9.19342H5.51562"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  option: PropTypes.number,
};

export default Button;
