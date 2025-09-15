import React from "react";
import { DocumentContext } from "../context/Document";
import { useContext } from "react";
const Preview = () => {
  const sourceList = useContext(DocumentContext);
  const { list, setList } = sourceList;
  console.log(list)
  return (
    <div className="border-orange-500 border-2 rounded-md mt-2 px-3 pb-3">
      <h1 className="text-xl mt-2">🚀 Sources</h1>
      <ul className="list bg-base-100 rounded-box shadow-md mt-3">
        {list.map((pdf) => {
          return (
            <li className="list-row">
              <div>
                <div>{list[0].name}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Preview;
