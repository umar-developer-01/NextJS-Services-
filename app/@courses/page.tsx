import indexStyles from "./index.module.css"

export default function Courses() {
  return (
    <>
       <div className={indexStyles.mainContainer}>
       <div className={indexStyles.innerContainer}>
          <div className={indexStyles.contentCotainer}>
             <div className={indexStyles.heading}>
              Our Courses
             </div>


             <div className={indexStyles.listingContainer}>
              <div className={indexStyles.arrow}></div>
              <p className={indexStyles.p}>Makeup Course</p>
            </div>



            <div className={indexStyles.listingContainer}>
              <div className={indexStyles.arrow}></div>
              <p className={indexStyles.p}>Hair Course</p>
            </div>
            


            
            <div className={indexStyles.listingContainer}>
              <div className={indexStyles.arrow}></div>
              <p className={indexStyles.p}>Beauty Course</p>
            </div>
             

             
            <div className={indexStyles.listingContainer}>
              <div className={indexStyles.arrow}></div>
              <p className={indexStyles.p}>Nail Course</p>
            </div>
             

            <div className={indexStyles.listingContainer}>
              <div className={indexStyles.arrow}></div>
              <p className={indexStyles.p}>Cidesco Course</p>
            </div>

            <div className={indexStyles.listingContainer}>
              <div className={indexStyles.arrow}></div>
              <p className={indexStyles.p}>Cosmetology Course</p>
            </div>
         
    
            
          </div>
        </div>
        </div>
    </>
  );
}
