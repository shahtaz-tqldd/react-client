import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to={"/"} className="fl">
      <img src={logo} className="h-12" />
      <h3 className="text-2xl text-white uppercase font-medium">Phonex</h3>
    </Link>
  );
};

export default Logo;
