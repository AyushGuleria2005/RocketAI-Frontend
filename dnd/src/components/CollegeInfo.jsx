import React from "react";

const CollegeInfo = () => {
  return (
    <div>
      <div className="card card-border bg-base-100 w-[40rem] ml-28">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-red-500">Welcome to Rocket AI Dashboard (Prototype)</h2>
          <h2 className="text-lg font-medium pb-5">Ramrao Adik Institute of Technology</h2>
          {/* <h3 className="text-red-400">Instance ID: RAIT-2024-001</h3> */}
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
            <select name="colleges" id="colleges" className="border-2 border-black p-1 rounded-xl">
              <option value="RAIT">Ramrao Adik Institue of Technology</option>
              <option value="IIT">Indian Institute of Technology</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;
