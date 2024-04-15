import React from "react";
import Tomatto from "../../images/tomatto.png"
import Mashroom from "../../images/mashrrom.png"
import Leef from "../../images/leef.png";
import "./sectionOne.css"

const Animation = () => {

    return(
        <>
        <div className="flex items-center">
            <img src={Mashroom} alt="mashroom" className="mashroom w-10" />
            <img src={Tomatto} alt="tomatto" className="tomatto w-20 "/>
            </div>
            
            <div className="leef flex justify-end">
            <img src={Leef} alt="leef" className=" w-16"/>
            </div>
           
        </>
    )
}

export default Animation;