import React from "react";
import cover from "../../images/c_img.jpg"

const Offer = () => {

    return(
        <>
        <div className="p-2 md:p-0 md:w-4/5 mx-auto relative md:mt-16" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000">
        <img src={cover} alt="" className="mx-auto rounded-3xl w-full h-[20rem] hidden md:block"/>
        <div className="md:absolute top-24  md:w-3/5 left-20 " data-aos="fade-left" data-aos-duration="2000" data-aos-offset="200">
           <h1 className="text-2xl md:text-4xl font-bold md:text-white">Today offer don't miss it</h1>
           <h1 className="text-sm md:text-white my-2">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Bibendum facilisis proin pharetra libero. Ut cras sem quisque et nam vitae, scelerisque. Ac laoreet posuere at ullamcorper ultrices leo faucibus. Pretium sem in nisl sodales sit vitae eget lorem rutrum. Vel nunc nibh quisque lectus cras luctus. Interdum in nulla elementum suspendisse id cursus. Viverra sit integer eleifend et eget lacus, a sem. Lacus pellentesque ornare volutpat eleifend. Suspendisse malesuada nunc ullamcorper et erat nam.</h1>
        </div>
        </div>
        
        </>
    )
}

export default Offer;