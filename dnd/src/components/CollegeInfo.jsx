import React, { useState } from "react";
import axios from "axios";

const CollegeInfo = () => {
  const [selectedCollege, setSelectedCollege] = useState("");

  const handleChange = async (e) => {
    const value = e.target.value;
    if (value === "") return;

    setSelectedCollege(value);

    try {
      const res = await axios.post(
        "http://localhost:3000/college", // adjust your backend URL
        {
          college_name: value === "RAIT" 
            ? "Ramrao Adik Institute of Technology" 
            : "Indian Institute of Technology",
          clg_name: value,
        },
        { withCredentials: true } 
      );

      console.log("API response:", res.data);
    } catch (err) {
      console.error("Error saving college:", err);
    }
  };

  return (
    <div>
      <div className="card card-border bg-slate-200 w-[40rem] ml-28 border-2 border-black">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-red-500">
            Welcome to Rocket AI Dashboard (Prototype)
          </h2>
          <h2 className="text-lg font-medium pb-5">
            {selectedCollege === "RAIT"
              ? "Ramrao Adik Institute of Technology"
              : selectedCollege === "IIT"
              ? "Indian Institute of Technology"
              : "Please select a college"}
          </h2>

          <div className="card-actions justify-end">
            <select
              name="colleges"
              id="colleges"
              className="border-2 border-black p-1 rounded-xl"
              onChange={handleChange}
              value={selectedCollege}
            >
              <option value="">-- Select College --</option>
              <option value="RAIT">Ramrao Adik Institute of Technology</option>
              <option value="IIT">Indian Institute of Technology</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;
