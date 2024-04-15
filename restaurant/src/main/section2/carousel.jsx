import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
            
import {Delete, Add} from "@mui/icons-material"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay'
import carousel from "../../images/curousel.jpg"


const CarouselMenu = () => {
    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [counter,setCounter] = useState(1)
    return (
        <div className="w-3/4 mx-auto">
            <Swiper
            loop={true}

            autoplay={{
            delay:1300,
            disableOnInteraction:true
            }}
                   breakpoints={{
                    300:{
                        with:300,
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
                {count.map(() => (
                    <>
                    <SwiperSlide 
                     
                    >
                    <div className="border rounded-lg  text-center">
                        <div className="px-2 py-2">
                        <img src={carousel} alt={"carousel"} className="rounded-full w-36 h-36 mx-auto"/>
                            <h1 className="text-center md:text-lg font-semibold">Mixed Vegetable Salad</h1>
                            <h1 className="text-sm">Tincidunt etiam tellus </h1>
                            <div className="flex items-center gap-4 ml-6">
                            <h1 className="text-[#EA3E69]">$ 18.00</h1>
                            <h1>$ 36</h1>
                            </div>
                        </div>
                           <div className="flex items-center gap-3 ml-6">
                          <h1 onClick={() => {
                            if(counter > 1){
                                setCounter((prev) => (prev -= 1))
                            } else {
                                setCounter(1)
                            }
                            
                          }} className={`cursor-pointer p-1 border rounded-lg ${counter == 1 ? "text-neutral-500 bg-neutral-300" : "bg-white "} `}><Delete/></h1> 
                           <h1>{counter}</h1>
                           <h1 onClick={() => {
                            if(counter > 0){
                                setCounter((prev) => (prev += 1))
                            } else {
                                setCounter(1)
                            }
                           }} className={`cursor-pointer p-1 border rounded-lg text-[#EA3E69] my-1`}><Add/></h1> 
                           </div>
                            
                            <h1 className="border rounded-b-lg text-white bg-[#EA3E69] py-3">Add to cart</h1>
                        </div>
                    </SwiperSlide>
                        
                    </>
                ))}
            </Swiper>
        </div>
    );
}

export default CarouselMenu;
