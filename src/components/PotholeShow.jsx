import React from "react";

const PotholeShow = (props) => {
  return (
    <div className="h-[20rem] w-80 bg-white p-4 rounded-lg flex flex-col grow ">
      <div className="flex flex-col">
        <strong className="text-gray-700 font-medium">Location</strong>
        <span className="text-gray-300 text-xs font-semibold">
          City | State
        </span>
      </div>

      <div className="w-4/5 ml-8 text-xs ">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
          <img className="py-5 w-60 h-[15rem]" src = {props.src}></img>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default PotholeShow;
