import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex bg-[#252422] mt-4 shadow-inner gap-40 justify-evenly pt-8 h-48">
        <ul className="text-[#fffcf2] font-bold">
          <li>Food App by,</li>
          <li className="hover:text-[#eb5e28]">
            &copy;{" "}
            <Link to="https://www.linkedin.com/in/swati-srivastav-sde/">
              SWATI SRIVASTAV - Software Developer{" "}
            </Link>
          </li>
        </ul>
        <ul className="flex-row font-bold text-[#fffcf2] ">
          <li>Careers</li>
          <li>Team</li>
          <li>About</li>
        </ul>
        <ul className="flex-row font-bold text-[#fffcf2] ">
          <li>Partner with us</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
