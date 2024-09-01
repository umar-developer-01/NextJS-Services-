import headerStyles from "./header.module.css";
import Logo from "../../images/logo.png";
import Image from "next/image";
import Hamburger from "./hamburger";

export default function Header() {
  return (
    <>
      <div className={headerStyles.outerContainer}>
        <div className={headerStyles.logoContainer}>
          <Image src={Logo} alt="Picture of the Logo" height={50} width={200} />
        </div>

        <div className={headerStyles.servicesContainer}>
          <div className={headerStyles.tile}>About Us</div>
          <div className={headerStyles.tile}>Contact</div>
        </div>
        <Hamburger />
      </div>
    </>
  );
}
