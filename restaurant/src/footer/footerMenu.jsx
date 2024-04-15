import React from "react";
import {Instagram,Facebook,Twitter} from "@mui/icons-material"
const FooterMenu = () => {

    return(
        <>
        <div className="md:flex grid grid-cols-2 md:flex-row gap-10 md:justify-center text-center md:items-center text-base">
        <h1 className="transition duration-300 hover:text-[#ea3e69] hover:scale-110 cursor-pointer">Home</h1>
        <h1 className="transition duration-300 hover:text-[#ea3e69] hover:scale-110 cursor-pointer">Category</h1>
        <h1 className="transition duration-300 hover:text-[#ea3e69] hover:scale-110 cursor-pointer">About us</h1>
        <h1 className="transition duration-300 hover:text-[#ea3e69] hover:scale-110 cursor-pointer">Card</h1>
        </div>
        <div className="grid grid-cols-2 md:flex text-center md:flex-row  md:justify-center md:items-center gap-10 mt-6 ">
         <h1 className="rounded-full transition duration-500 cursor-pointer hover:bg-[#EA3E69] p-1 hover:text-white"><Instagram className="text-xs p-[0.10rem]"/></h1> 
          <h1 className="rounded-full transition duration-500 cursor-pointer hover:bg-[#EA3E69] p-1 hover:text-white"><Facebook className="text-xs p-[0.10rem]"/></h1>
          <h1 className="rounded-full transition duration-500 cursor-pointer hover:bg-[#EA3E69] p-1 hover:text-white"><Twitter className="text-xs p-[0.10rem]"/></h1> 
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-10 mt-10">
            <h1 className="text-sm text-neutral-600">2024 &copy; All rights reserved</h1>
            <div className="flex gap-3 items-center">
            <h1 className="text-sm border-r-2 border-neutral-600 pr-2 hover:text-neutral-600 duration-300 cursor-pointer underline">Terms & Conditions</h1>
            <h1 className="text-sm hover:text-neutral-600 duration-300 underline cursor-pointer">Privacy Policy</h1>
            </div>
            
        </div>
        </>
    )
}

export default FooterMenu;