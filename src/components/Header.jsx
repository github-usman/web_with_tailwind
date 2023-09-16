import React, { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
const Header = () => {

  const [toggle, setToggle] = useState(false);
  const handleMenu =()=>{
    setToggle(!toggle);
  }
  return (
    <div className="bg-[#2a00fbbd] p-4">
      <div className="max-w-[1240px] py-[5px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">Usman Ali Ansari</div>
        {
          !toggle?<AiOutlineMenu onClick={handleMenu} className="text-[#fff] text-2xl md:hidden block"/>:
          <AiOutlineClose onClick={handleMenu} className="text-[#fff] text-2xl md:hidden block"/>
        }

        <ul className="hidden md:flex text-[#fff] gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsie menu */}
        <ul className={`duration-300 md:hidden w-full h-screen text-[#000000] fixed bg-[powderblue] top-[78px] 
         ${!toggle?'left-[100%]':'left-[0]'}
        `}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
