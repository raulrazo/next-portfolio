import logo from "../assets/kevinRushLogo.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navigation = () => {
  return (
    <nav className="mb-20 flex itmes-center justify-between py-6 mx-auto px-8">
      <div className="flex flex-shrink-0 items-center">
        <Image className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navigation;
