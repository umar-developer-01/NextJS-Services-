import indexStyles from "./index.module.css";

export default function Address() {
  return (
    <>
      <div className={indexStyles.mainContainer}>
        <div className={indexStyles.innerContainer}>

        <div className={indexStyles.heading}>
           Incorporation Registered Head Office
        </div>
        <div className={indexStyles.content}>

        <p className={indexStyles.p}>2358/38 gali shachhada opposite jeevan zarda factory</p> 
        
        <p className={indexStyles.p}>Patanala Chowk Lucknow Uttar Pradesh 226003</p>
        </div>
      </div>
      </div>
    </>
  );
}
