import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3, FaReact, FaGit, FaBootstrap } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import { TbJson } from "react-icons/tb";

const Tecnology = () => {
  return (
    <div>
      <h3 className="text-center">Tecnologies:</h3>

      <div className="d-flex justify-content-evenly align-content-center align-items-center mt-5 mb-5">
      
        <TbBrandVscode color="#007ACC" size="30" className="size-icon" />
        <FaHtml5 color="#E44D26" size="30" className="size-icon" />
        <FaCss3 color="#264de4" size="30" className="size-icon" />
        <FaBootstrap color="#563d7c" size="30" className="size-icon" />
        <IoLogoJavascript color="#f0db4f" size="30" className="size-icon" />
        <FaReact color="#61DAFB" size="30" className="size-icon" />
        <IoLogoFirebase color="#FFCA28" size="30" className="size-icon" />
        <FaGit color="#F05032" size="30" className="size-icon" />
        <TbJson color="#88cc88" size="30" className="size-icon" />
      </div>
    </div>
  );
};

export default Tecnology;
