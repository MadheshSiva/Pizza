import React from "react";
import red_chilly from "../../images/red_chilly.png"
import white_chilly from "../../images/drawing_chilly.png";
import "./talk.css"
const Talk = () => {


    return(
        <>
        <div className="relative mt-12 md:mt-16">
        <div className="md:absolute bottom-0 right-3">
             <img src={red_chilly} alt="" className="w-28 hidden md:block"/>
             <img src={white_chilly} alt="" className="drawing w-28 hidden md:block"/>
        </div>
        <div className="w-[90%] md:w-4/5 mx-auto border rounded-lg py-10 shadow-[0_0_1rem_2px_rgba(0,0,0,0.3)]"> 
            <div className="flex flex-col md:flex-row items-center justify-between mx-5 md:mx-10 border-b pb-3" data-aos-offset="300" data-aos-duration="2000" data-aos="zoom-in">
            <div>
                <h1 >LET’S TALK</h1>
                <h1 className="text-lg font-semibold">Want to reserve a table ?</h1>
            </div>
            <h1 className="text-white border bg-[#EA3E69] border-[#EA3E69] px-3 py-1 rounded-lg cursor-pointer transition duration-300 hover:shadow-[0_0_1rem_5px_rgba(237,19,74,0.4)]">Reserve Table</h1>
            </div>
            <div className="mt-3 md:mt-5">
                <h1 className="px-5 md:px-10">Blandit praesent faucibus risus, sed enim, eget suspendisse. Feugiat eu porttitor et integer sem. Pulvinar sagittis donec auctor odio ultricies euismod.</h1>
            </div>
        </div>
        </div>
        </>
    )
}

export default Talk