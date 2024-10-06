import indexStyles from "./index.module.css";
import Image from "next/image";
import BarberImage from "../../images/barber.jpg";
export default function Services() {
  return (
    <>
      <div className={indexStyles.mainContainer}>
        <div className={indexStyles.innerContainer}>
          {/* <div className={indexStyles.heading}>Services</div> */}
          <div className={indexStyles.servicesContainer}>
      
              <Image
                src={BarberImage}
                alt="barberImage"
                className={indexStyles.barberImage}
              />
 
          </div>
        </div>
      </div>
    </>
  );
}
