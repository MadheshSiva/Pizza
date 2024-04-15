import React from "react";
import PersonCarousel from "./personCarousel";
import Talk from "./talk";
const PersonBar = () => {

    return(
        <>
        <div className="text-center">
        <h1 className="text-3xl font-bold">Testimonial</h1>
        <h1 className="text-sm">Nascetur hac eu nunc ac. At tincidunt etiam tellus diam, at est</h1>
        </div>
        <div className="my-5">
            <PersonCarousel/>
        </div>
        <div>
            <Talk/>
        </div>
        </>
    )
}

export default PersonBar;