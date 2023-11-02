import React from "react";

const PotholeShow = (props) => {
  return (
    <div className="h-[20rem] w-80 bg-white p-4 rounded-lg flex flex-col grow ">

      <div className="w-full grid grid-cols-2 gap-4 my-2">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
         <div className="flex-col">
            <strong className="text-blue-700 font-medium">Original</strong>
            <img className="py-2 w-30 h-[15rem]" src = {props.src1}></img>
         </div>
          
         <div className="flex-col">
            <strong className="text-blue-700 font-medium">Detected</strong>
            <img className="py-2 w-30 h-[15rem]" src = {props.src2}></img>
         </div>
         
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default PotholeShow;
