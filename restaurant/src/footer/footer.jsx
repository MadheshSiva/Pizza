import React from "react";
import "./footer.css"
import FooterMenu from "./footerMenu";
import footer_logo from "../images/footer_logo.png"
import collifolwer from "../images/colifolwer.png"
const Footer = () => {

    return (
        <>
            <div className="relative " >
                <div className="md:absolute top-32 z-30">
                  <img src={collifolwer} alt="" className="hidden md:block"/>
                </div>
                <div className="md:absolute top-[8rem]  w-full z-30" data-aos="fade-up"
     data-aos-duration="2000" data-aos-offset="300">
                    <img src={footer_logo} alt="footer_logo" className="w-[15%] mx-auto hidden md:block" />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="hidden md:block">
                    <path fill="#dfe8e1" fill-opacity="1" d="M0,288L120,256C240,224,580,160,720,160C960,160,1200,224,1320,256L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>

                </svg>
                <div className="background-wave hidden md:block"></div>
                <div className="md:absolute bottom-10  mx-auto justify-center w-full h-auto">
                    <FooterMenu />
                </div>
            </div>
        </>
    )
}

export default Footer;