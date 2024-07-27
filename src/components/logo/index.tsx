import { Link } from "react-router-dom";
const img = "";

const Logo = ({ lg = false, md = false, sm = false, className }) => {
  return (
    <Link
      to={"/"}
      className={`${className} ${
        lg ? "text-2xl" : md ? "text-xl" : sm ? "text-lg" : "text-xl"
      }`}
    >
      {img ? <img src={img} className="" /> : <b> LOGO</b>}
    </Link>
  );
};

export default Logo;
