import React from "react";
import SectionList from "../section1/sectionList";
import SectionMenu from "./sectionMenu";
import orange from "../../images/orange_leaf.png"
import CarouselMenu from "./carousel";
import Offer from "./offer";

const SectionTwo = () => {

    return (
        <>
        <div className="relative" >
        <div className="text-center mt-7 md:mt-14" data-aos="flip-left" data-aos-duration="1500" data-aos-offset="300">
                <h1 className="text-2xl md:text-4xl font-bold">Check out out list enjoy our food</h1>
                <h1 className="text-md md:text-base my-5">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Ullamcorper augue sapien eget imperdiet curabitur viverra </h1>
            </div>
            <SectionMenu />
            <div className="mt-8 ">
                <CarouselMenu />
                
            </div>
            <div className="absolute right-3 top-1/2">
                       <img src={orange} alt="" className="w-20 hidden md:block"/>
                </div>
            <div className="mt-8">
                <Offer />
            </div>
        </div>
            
        </>
    )
}

export default SectionTwo;