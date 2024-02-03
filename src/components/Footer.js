import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex bg-[#006d77] mt-4 shadow-inner gap-40 justify-evenly pt-8 h-48">
        <ul className="text-[#edf6f9] font-bold">
          <li>Food App by,</li>
          <li>
            &copy;{" "}
            <Link to="https://www.linkedin.com/in/swati-srivastav-sde/">
              SWATI SRIVASTAV - Software Developer{" "}
            </Link>
          </li>
        </ul>
        <ul className="flex-row font-bold text-[#edf6f9] ">
          <li>Careers</li>
          <li>Team</li>
          <li>About</li>
        </ul>
        <ul className="flex-row font-bold text-[#edf6f9] ">
          <li>Partner with us</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
