import { BsGithub, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Info = () => {
  return (
    <div>
      <h3 className="text-center">Contact</h3>

      <div className="d-flex justify-content-evenly align-content-center align-items-center mt-5 mb-5">
        <BsGithub color="#24292e" size={"30px"} className="size-icon" />
        <BsFacebook color="#3b5998" size={"30px"} className="size-icon" />
        <BsWhatsapp color="#25D366" size={"30px"} className="size-icon" />
        <BiLogoGmail color="#DB4437" size={"30px"} className="size-icon" />
      </div>
    </div>
  );
};

export default Info;
