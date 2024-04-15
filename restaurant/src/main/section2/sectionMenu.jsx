import React, { useState } from "react";

const SectionMenu = () => {
   const [hover,setHover] = useState('Imperdiet')

    return(
    <>
    <div className="border border-neutral-400  px-2 py-1 rounded-lg w-1/2 mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className={`${hover == 'Imperdiet' ? "bg-[#EA3E69] rounded-lg text-white" : "text-black"} px-5 py-2  text-base cursor-pointer`}onClick={() => setHover('Imperdiet')}>Imperdiet</h1>
        <h1 className={`${hover == 'Vestibulum' ? "bg-[#EA3E69] rounded-lg text-white" : "text-black"} px-5 py-2  text-base cursor-pointer`}onClick={() => setHover('Vestibulum')}>Vestibulum</h1>
        <h1 className={`${hover == 'Maecenas' ? "bg-[#EA3E69] rounded-lg text-white" : "text-black"} px-5 py-2  text-base cursor-pointer`}onClick={() => setHover('Maecenas')}>Maecenas</h1>
        <h1 className={`${hover == 'Scelerisque' ? "bg-[#EA3E69] rounded-lg text-white" : "text-black"} px-5 py-2  text-base cursor-pointer`}onClick={() => setHover('Scelerisque')}>Scelerisque</h1>
    </div>
    </>)
}

export default SectionMenu;