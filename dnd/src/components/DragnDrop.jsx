import React, { useState } from "react";
import { DocumentContext } from "../context/Document";
import { useContext } from "react";

const DragnDrop = () => {
  const sourceList = useContext(DocumentContext);
  const {list,setList} = sourceList;
  const [docsList, setDocsList] = useState([]);
  // const [dragColor,setDragColor] = useState("var(--color-neutral-content)")
  // console.log(docsList);
  return (
    <div>
      <div
        className="card w-90 bg-base-100 card-xs shadow-sm h-52 border-orange-500 border-2 rounded-md"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const newFile = e.dataTransfer.files[0]; // New file that was dropped
          const formData = new FormData();    // creating instance of formData
          formData.append("ayush", newFile);
          for (let [key, value] of formData.entries()) {
            // console.log(key,value)
            setList((prevList) => {
              return [...prevList, value];
            });
          }
        }}
      >
        <div className="card-body rounded-lg flex justify-center items-center">
          <h1 className="text-lg">Drop files here or click to browse 📁</h1>
        </div>
      </div>
    </div>
  );
};

export default DragnDrop;
