import bannerStyle from "./banner.module.css";

export default function Banner() {
  return (
    <>
      <div className={bannerStyle.mainContainer}>
        <div className={bannerStyle.innerContainer}>
          <div className={bannerStyle.heading}>Classes Updates</div>
          <div className={bannerStyle.subHeading}>
            India No 1 Award Winning Beauty And Makeup Academy.
          </div>
          <div className={bannerStyle.listing}>
            <div className={bannerStyle.innerListing}>
              <p className={bannerStyle.listingHeading}>Monday to Friday</p>
              <p>Regular Classes</p>
            </div>

            <div>
              <p className={bannerStyle.listingHeading}>Saturday</p>
              <p >Special Classes</p>
            </div>

            <div>
              <p className={bannerStyle.listingHeading} >Sunday</p>
              <p >Weekend Batches</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
