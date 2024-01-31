import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.string,
};

export default DefaultLayout;
