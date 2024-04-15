import React from "react";
import Animation from "./Animation";
import SectionList from "./sectionList";

const SectionOne = () => {

    return(
        <>
        <div className="relative mt-10">
        <div className="bg-white hidden md:block md:absolute md:right-4 md:top-2 ">
            <Animation/>
        </div>
        <div >
        <SectionList/>
        </div>
       
        </div>
        </>
    )
}

export default SectionOne;