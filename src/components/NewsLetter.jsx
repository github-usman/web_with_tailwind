import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50]">
        <div className=" text-[#fff] m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold ">
            Want to learn latest I.T skills
          </h1>
          <span>
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="m-2 ">
          <input type="text" className=' p-3 rounded mr-2 text-slate-300' placeholder='Email' />
          <button className="bg-black p-3 text-[#fff] rounded">Get started</button>
          <br />
          <p className=" text-white"> 
            We care about the protection of your data. Read our <br /> <a href="/" className="text-black">Privacy Policy.</a> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
