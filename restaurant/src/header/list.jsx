import React from "react";
import logo from "../images/header-logo.png"
import "./button.css"
const List = () => {

    return(
        <>
        <div className="w-4/5 p-2 md:w-[45%] mx-auto">
        <img src={logo} alt="logo" className="w-44 h-24 mx-auto hidden md:block"/>
        <h1 className="font-bold text-[20px]  md:text-[28px] md:text-white tracking-wider md:text-center my-2">Join our food community</h1>
        <h1 className="text-[10px] md:text-[18px] md:text-white tracking-wider md:text-center">Vestibulum sagittis tristique nunc ridiculus sit nunc tristique. Ullamcorper augue sapien eget imperdiet curabitur viverra mollis metus. Viverra diam sit proin a viverra sem. Enim, elit etiam posuere iaculis ultricies praesent est sem.</h1>
        <div className="flex justify-center mt-1">
        <button className="btn btn1 ">View Menu</button>
        </div>
        
        </div>
        
        </>
    )
}

export default List;