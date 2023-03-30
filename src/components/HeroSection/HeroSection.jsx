import React from "react";
import Button from "../common/Button/Button";
import "./heroSection.css";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      {/* <div className="flex absolute-center hero-claim-label">
        <div>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className="claim-anchor">claim now</div>
        web-images.credcdn.in/_next/assests/images/homw-page/arrow.png
      </div> */}
      <div className="flex absolute-center flex-col hero-section max-width">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
}

export default HeroSection;
