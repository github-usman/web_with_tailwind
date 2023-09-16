import React from "react";
import Typed from 'react-typed';
const Banner = () => {
  return (<div className="bg-[#2699fb] w-full py-[78px]">
   <div className="max-w-[1240px] text-center font-bold mx-auto">
    <div className="text-xl md:text-3xl">
        Learn with us
    </div>
   
     <h2 className="text-[#fff] text-[40px]  md:text-[60px]">
        Grow with us.
     </h2>
     <h3 className="text-[30px]  md:text-[50px] text-[#fff]">
        Learn
        <Typed
        className="pl-3 "
            strings={['Web-Development','React.Js','Tailwind']}
            typeSpeed={50}
            loop
            backSpeed={50}
        />
     </h3>
     <button className="bg-black p-3 text-[#fff] rounded">Get started</button>
    
   </div>
  </div>)
};

export default Banner;
