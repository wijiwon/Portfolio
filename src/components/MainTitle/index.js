import React from "react";

const index = (props) => {
  return (
    <div className="mt-[60px] mx-[30px] box-content border-b-8 mobile:border-b-4 border-gray-600 text-[50px] mobile:text-[25px] text-left font-bold font-['KOHIBaeumOTF']">
      {props.title}
    </div>
  );
};

export default index;
