import React from "react";
import ListCard from "./listCard";

const SectionList = () => {
    return(
        <>
        <div className="flex flex-col lg:flex-row" >
        <div className="w-full lg:w-[45%]" data-aos="fade-right" data-aos-duration="1900" data-aos-offset="300">
        <ListCard/>
        </div>
        <div className="w-full lg:w-[55%] md:ml-10 mt-16 md:mt-32" data-aos="fade-left" data-aos-duration="1900" data-aos-offset="300">
            <div className="w-[90%] md:w-3/5 mx-auto md:mr-auto">
            <h1 className="text-black text-2xl md:text-5xl font-bold">lacus commodo <span className="text-[#EA3E69]">elementum gravida</span> maecenas sagittis</h1>
            <h1 className="my-5">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Bibendum facilisis proin pharetra libero. Ut cras sem quisque et nam vitae, scelerisque. Ac laoreet posuere at ullamcorper ultrices leo faucibus. Pretium sem in nisl sodales sit vitae eget lorem rutrum. Vel nunc nibh quisque lectus cras luctus. Interdum in nulla elementum suspendisse id cursus. Viverra sit integer eleifend et eget lacus, a sem. Lacus pellentesque ornare volutpat eleifend. Suspendisse malesuada nunc ullamcorper et erat nam.</h1>

            <h1 className="md:w-1/4 border transition duration-500 cursor-pointer rounded-lg py-2 border-[#EA3E69] hover:shadow-[0_0_1rem_2px_rgba(234,62,105,0.8)] text-center text-white bg-[#EA3E69]">View more</h1>
            </div>
        </div>
        </div>
        </>
    )
}

export default SectionList;