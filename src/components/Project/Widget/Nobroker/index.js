import React from "react";

const index = (prop) => {
  return (
    <div className="flex w-full justify-evenly p-4">
      <img
        className=" w-[50px] border-2 cursor-pointer hover:border-blue-400"
        src={process.env.PUBLIC_URL + "/NoBroker_img_1.gif"}
        alt="Bounswap_view1"
        onClick={prop.click}
      />
      <img
        className=" w-[50px] border-2 cursor-pointer hover:border-blue-400"
        src={process.env.PUBLIC_URL + "/NoBroker_img_2.gif"}
        alt="Bounswap_view2"
        onClick={prop.click}
      />
      <img
        className=" w-[50px] border-2 cursor-pointer hover:border-blue-400"
        src={process.env.PUBLIC_URL + "/NoBroker_img_3.gif"}
        alt="Bounswap_view3"
        onClick={prop.click}
      />
      <img
        className=" w-[50px] border-2 cursor-pointer hover:border-blue-400"
        src={process.env.PUBLIC_URL + "/NoBroker_img_4.gif"}
        alt="Bounswap_view4"
        onClick={prop.click}
      />
      <img
        className=" w-[50px] border-2 cursor-pointer hover:border-blue-400"
        src={process.env.PUBLIC_URL + "/NoBroker_img_5.gif"}
        alt="Bounswap_view5"
        onClick={prop.click}
      />
    </div>
  );
};

export default index;
