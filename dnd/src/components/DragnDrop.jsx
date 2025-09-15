import React, { useState, useContext } from "react";
import { DocumentContext } from "../context/Document";

const DragnDrop = () => {
  const { list, setList } = useContext(DocumentContext);
  console.log(list);
  return (
    <div
      className={`card w-90 bg-base-200 card-xs shadow-md hover:shadow-lg hover:scale-[1.01] 
      transition-all duration-200 h-52 border-2 rounded-2xl cursor-pointer`}
      
      onDragOver={(e)=>{
        e.preventDefault();
      }}

      onDragEnter={(e)=>{
        e.preventDefault()
      }}

      onDragLeave={(e)=>{
        e.preventDefault()
      }}

      onDrop={(e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setList((prev)=>[...prev,droppedFile])
        console.log("Details of dropped files: "+droppedFile);
      }}
    >
      <div className="card-body rounded-lg flex justify-center items-center">
        <h1 className="text-lg text-slate-400">
          Drop files here or click to browse 📁
        </h1>
      </div>
    </div>
  );
};

export default DragnDrop;
