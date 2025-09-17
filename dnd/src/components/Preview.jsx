import React from "react";
import { DocumentContext } from "../context/Document";
import { useContext } from "react";
const Preview = () => {
  const sourceList = useContext(DocumentContext);
  const { list, setList } = sourceList;
  // console.log(list);
  return (
    <div className="border-black border-2 rounded-2xl mt-2 px-3 pb-3 min-h-56 max-h-56 overflow-y-auto shadow-md hover:shadow-lg transition-all duration-200">
      <h1 className="text-xl mt-2 text-blue-600 font-medium text-center border-b-2 border-red-500 pb-1">
        🚀 Sources Preview
      </h1>
      <ul className="list bg-base-200 rounded-box shadow-sm hover:shadow-md mt-3 transition-all duration-200">
        {list.map((pdf, i) => (
          <li
            key={i}
            className="list-row p-2 rounded-md hover:bg-slate-200 hover:shadow-md transition-all"
          >
            <div>{list[i].name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;
