import React, { useContext, useState } from "react";
import { DocumentContext } from "../context/Document";
import axios from "axios";

const TextContex = () => {
  const [text, setText] = useState("");
  const { list,setToast } = useContext(DocumentContext);
  return (
    <div className="mt-2 p-3 flex flex-col gap-3 border-white border-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
      <input
        type="text"
        placeholder="Add some context.."
        className="input input-md shadow-sm hover:shadow-md transition-all duration-200"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        onClick={async () => {
          const formData = new FormData();
          list.forEach((file) => {
            formData.append("files", file);
          });
          formData.append("text", text);
          try {
            await axios.post("http://localhost:3000/upload", formData);
            setToast(true)
            setTimeout(()=>{
              setToast(false)
            },2000)
          } catch (err) {
            console.log(err.message);
          }
        }}
      >
        Upload 🚀
      </button>
    </div>
  );
};

export default TextContex;
