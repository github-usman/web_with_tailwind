import React from "react";

const Experts = () => {
  return <div className="p-2 max-w-[1240px] mx-auto my-10 md:grid grid-cols-3">
    <div className=" h-[200px] col-span-1 text-center md:w-[95%]">
        <img className=" rounded w-[100%] h-[100%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s" alt="discove_camera" />
    </div>
    
    <div className=" h-[200px] col-span-2 flex flex-col justify-center">
        <h1 className="text-[#00df91] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="my-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, iure excepturi? Consectetur voluptatem numquam neque ipsum culpa a optio vitae vel tempore minima nulla cumque impedit assumenda nostrum, molestiae sapiente.</p>
        <button className="w-[40%]  bg-black p-3 text-[#fff] rounded">Get started</button>
    </div>
  </div>;
};

export default Experts;
