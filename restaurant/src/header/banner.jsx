import React from "react";
import Bg_Img from "../images/cover_image.jpg"
import server from "../images/server.png"
import { Menu } from "@mui/icons-material";
import MenuCard from "./menu";
import List from "./list";
const Banner = () => {

    return (
        <>
            <div className="relative">
                <img src={Bg_Img} alt="cover_image" className="w-full h-[43.9rem] hidden md:block" />
                <div className="md:absolute md:top-6 w-full">
                    <MenuCard/>
                </div>
                <div className="md:absolute md:bottom-0 right-0 md:w-1/4 " data-aos-duration="900" data-aos="fade-left">
                    <img src={server} alt="server" className="hidden md:block"/>
                </div>
                
                <div className="md:absolute md:top-52 w-full">
                  <List/>
                </div>
            </div>

        </>
    )
}

export default Banner;