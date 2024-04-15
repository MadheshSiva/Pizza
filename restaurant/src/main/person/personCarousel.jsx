import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import comma from "../../images/camma.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import carousel from "../../images/curousel.jpg"
import male from "../../images/male.png"
import female from "../../images/female.jpg"

const PersonCarousel = () => {
    const count = [{
        "name":"lizza",
        "content":"Blandit praesent faucibus risus, sed enim, eget suspendisse. Feugiat eu porttitor et integer sem. Pulvinar sagittis donec auctor odio ultricies euismod.",
        "img":`${female}`
    },
    {
        "name":"arvi",
        "content":"Non amet gravida tortor enim lorem sapien bibendum tincidunt consequat pellentesque. Quisque nisl phasellus nisi imperdiet. Vulputate in massa aenean dictum.",
        "img":`${male}`
    },
    {
        "name":"lizza",
        "content":"Eleifend massa dui sit convallis senectus. Faucibus hendrerit enim ultrices velit commodo commodo. lacus massa pulvinar eget risus.",
        "img":`${female}`
    },
    {
        "name":"lizza",
        "content":"Blandit praesent faucibus risus, sed enim, eget suspendisse. Feugiat eu porttitor et integer sem. Pulvinar sagittis donec auctor odio ultricies euismod.",
        "img":`${female}`
    },
    {
        "name":"kum",
        "content":"Eleifend massa dui sit convallis senectus. Faucibus hendrerit enim ultrices velit commodo commodo. lacus massa pulvinar eget risus.",
        "img":`${male}`
    },
]
    const [counter,setCounter] = useState(1)
    return (
        <div className="w-3/4 mx-auto">
            <Swiper
            autoplay={{
                delay:1300,
                disableOnInteraction:true
            }}
            loop={true}
                   breakpoints={{
                    100:{
                        with:100,
                        slidesPerView:1
                    },
                    640:{
                        width:640,
                        slidesPerView:2
                    },
                    768:{
                        width:768,
                        slidesPerView:3
                    },
                    1024:{
                        width:1024,
                        slidesPerView:4
                    }
                                           
                }
                   }
                modules={[Navigation,Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {count.map((list) => (
                    <>
                    <SwiperSlide 
                     
                    >
                    <div className="border rounded-lg  text-center relative">
                        <div className="px-2 py-2">
                            <img src={list.img} alt="" className="rounded-full w-32 h-32 border mx-auto" />
                            
                            <h1 className="text-sm"><img src={comma} className="w-1/4 mx-auto"/></h1>
                            <div className="">
                            <h1 className="text-[#EA3E69]">{list.name}</h1>
                            <h1 className="text-xs">{list.content}</h1>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                        
                    </>
                ))}
            </Swiper>
        </div>
    );
}

export default PersonCarousel;
