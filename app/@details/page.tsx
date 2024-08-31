import detailsStyle from "./details.module.css";

export default function Details() {
  return (
    <>
      <div className={detailsStyle.mainContainer}>
        <div className={detailsStyle.innerContainer}>
          <div className={detailsStyle.heading}>Mr. AMS</div>
          <div className={detailsStyle.subHeading}>
            Leading industry professionals created the program, which includes
            the instruction on everything from skincare to hairstyle in the
            field of the makeup artistry.
          </div>
          <div className={detailsStyle.listing}>
            <div className={detailsStyle.listingContainer}>
              <div className={detailsStyle.arrow}></div>
              <p>Free Self Grooming Classes</p>
            </div>

            <div className={detailsStyle.listingContainer}>
              <div className={detailsStyle.arrow}></div>
              <p>Free Portfolio Photoshoot</p>
            </div>

            <div className={detailsStyle.listingContainer}>
              <div className={detailsStyle.arrow}></div>
              <p>Free Personality Enhancement classes</p>
            </div>


            

            <div className={detailsStyle.listingContainer}>
              <div className={detailsStyle.arrow}></div>
              <p>Free Saloon Management Classes</p>
            </div>

            <div className={detailsStyle.listingContainer}>
              <div className={detailsStyle.arrow}></div>
              <p>Free Freelance Setup Guidance</p>
            </div>

            <div className={detailsStyle.listingContainer} >
              <div className={detailsStyle.arrow}></div>
              <p>Free Digital Marketing Classes</p>
            </div>

            <div className={detailsStyle.listingContainer}>
              <div className={detailsStyle.arrow}></div>
              <p>Free Master CLasses By Industry Expert</p>
            </div>

            <div className={detailsStyle.listingContainer}>
              <div className={detailsStyle.arrow}></div>
              <p>Free Lifetime Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
