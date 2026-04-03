import React from "react";
import "../components/WelcomePage.css";
import container from "../assets/forklift-working-in-the-container-cargo-yard-port.jpg";
import workers from "../assets/foreman-control-loading-containers-box-.jpg";
const WelcomePage = () => {
  return (
    <section className="aboutWel">
      <div className="containerWel about-wrapperWel">
        
        {/* LEFT SIDE IMAGES */}
        <div className="about-imagesWel">

          {/* Main Image */}
          <div className="main-imgWel">
            <img
              src={container}
              alt="container"
            />

            {/* Experience Card */}
            <div className="experience-cardWel">
              <h2>25+</h2>
              <p>Years of Experience</p>
            </div>
          </div>

          {/* Small Image */}
          <div className="small-imgWel">
            <img
              src={workers}
              alt="workers"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-contentWel">
          <span className="subtitleWel">WELCOME TO</span>

          <h1>
            CANADA LOGISTICS 
          </h1>

          <p className="descWel">
            International Moving & Shipping by Air and Ocean as well as Customized Freight Solutions is at the heart of Canada Logistics Inc. We are an International Shipping Company located in Canada with Offices in Mississauga, Ottawa and Montreal. At Canada Logistics Inc. we pride ourselves in being one of the best international shipping companies in Mississauga, Montreal & Ottawa and are second to none when looking for an international Moving company that can tailor it’s Air and Ocean shipping services to meet every client’s needs.
          </p>

          <div className="listWel">
            <div>➤ Local Shipping</div>
            <div>➤ International Shipping</div>
          </div>

          <div className="buttonsWel">
            <button className="btnWel orangeWel">More About Us</button>
            <button className="btnWel greenWel">Get A Quote Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;