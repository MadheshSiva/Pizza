import React from "react";


const Map = () => {

    return(
        <>
        <div className=" md:w-4/5 flex flex-col md:flex-row items-center mx-auto border rounded-lg mt-7 md:mt-16 shadow-[0_0_1rem_2px_rgba(0,0,0,0.4)]">
            <div className="h-[10%]  md:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125042.27043219375!2d78.05589484005189!3d11.65389151002477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca47!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712576468079!5m2!1sen!2sin" width="600" height="270" style={{border:0, borderTopLeftRadius:"10px",borderBottomLeftRadius : "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="p-2 md:p-5">
                <h1 className="text-2xl md:text-4xl font-semibold">Aliquet eget malesuada <span className="text-[#EA3E69]">ornare scelerisque</span> quam</h1>
                <h1 className="text-md md:text-lg">At tincidunt etiam tellus diam, at est. Porttitor at id in lobortis facilisis donec arcu, venenatis. Tristique risus morbi accumsan quisque risus. </h1>
            </div>
        </div>
        
        </>
    )
}

export default Map;