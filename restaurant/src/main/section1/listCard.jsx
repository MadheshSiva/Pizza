import React from "react";
import food from "../../images/food.png";
import delivery from "../../images/delivery.png";
import list from "../../images/list.png";
import plate from "../../images/plate.png";
const ListCard = () => {

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-3/4 ml-10 md:ml-auto mt-5">
            <div>
                <div>
                    <div className="border transition duration-300 rounded-xl px-2 py-5 shadow-[0_0_0.5rem_2px_rgba(0,0,0,0.2)] hover:bg-neutral-400 cursor-pointer hover:text-white">
                        <img src={food} alt="food" className="w-24 mx-auto" />
                        <h1 className="text-[18px] font-bold text-center">Delicious food</h1>
                        <h1 className="text-[13px] text-center">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Ullamcorper augue sapien eget imprediet curabitur viverra mollis metus. Viverra</h1>
                    </div>
                    <div className="border transition duration-300 rounded-xl px-2 py-5 shadow-[0_0_0.5rem_2px_rgba(0,0,0,0.2)] hover:bg-neutral-400 cursor-pointer mt-5 hover:text-white">
                        <img src={delivery} alt="food" className="w-24 mx-auto" />
                        <h1 className="text-[18px] font-bold text-center">Super fast delivery</h1>
                        <h1 className="text-[13px] text-center">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Ullamcorper augue sapien eget imperdiet curabitur viverra mollis metus, a. Viverra.</h1>
                    </div>
                </div>
            </div>
            <div className=" md:mt-28">
                <div className="border rounded-xl px-2 transition duration-300 bg-[#EA3E69] py-5 hover:shadow-inner cursor-pointer hover:shadow-[#EA3E69]">
                    <img src={list} alt="food" className="w-24 mx-auto" />
                    <h1 className="text-[18px] font-bold text-center text-white">List of food menu</h1>
                    <h1 className="text-[13px] text-center text-white">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Ullamcorper augue sapien eget imprediet curabitur viverra mollis metus. Viverra</h1>
                </div>
                <div className="border transition duration-300 rounded-xl px-2 py-5 shadow-[0_0_0.5rem_2px_rgba(0,0,0,0.2)] hover:bg-neutral-400 cursor-pointer mt-5 hover:text-white">
                    <img src={plate} alt="food" className="w-24 mx-auto" />
                    <h1 className="text-[18px] font-bold text-center">Hygienic serve</h1>
                    <h1 className="text-[13px] text-center">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Ullamcorper augue sapien eget imperdiet curabitur viverra mollis metus, a. Viverra.</h1>
                </div>
            </div>
            </div>
        </>
    )
}

export default ListCard;