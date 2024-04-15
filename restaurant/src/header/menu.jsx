import React from "react";
import {PermIdentity,AddShoppingCart} from "@mui/icons-material"
const MenuCard = () => {

    return(
        <>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:px-16">
        <div className="md:w-1/2 md:text-white flex flex-row gap-8">
            <h1 className="transition duration-300 hover:translate-x-[0.45rem] hover:underline hover:text-[#EA3E69] cursor-pointer">Food Menu</h1>
            <h1 className="transition duration-300 hover:translate-x-[0.45rem] hover:text-[#EA3E69] hover:underline cursor-pointer">About us</h1>
        </div>
        <div className="md:w-1/2 flex mt-5 md:mt-0 flex-row gap-4 items-center justify-end">
          <h1 className="border p-1 rounded-lg cursor-pointer transition duration-300 hover:scale-125 hover:text-[#EA3E69] md:text-white hover:border-0"><AddShoppingCart className=""/></h1>
          <h1 className="border p-1 rounded-lg cursor-pointer transition duration-300 hover:scale-150 hover:text-[#EA3E69] md:text-white hover:border-0"><PermIdentity className=""/></h1>
            <h1 className="md:text-white border bg-[#EA3E69] border-[#EA3E69] px-3 py-1 rounded-lg cursor-pointer transition duration-300 hover:shadow-[0_0_1rem_10px_rgba(237,19,74,0.8)]">Reserve Table</h1>
        </div>
        </div>
         </>
    )
}

export default MenuCard;