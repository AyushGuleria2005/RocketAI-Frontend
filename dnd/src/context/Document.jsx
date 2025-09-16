// Import context from react
import { createContext, useState } from "react";


// Creating a context
export const DocumentContext = createContext(null);

// Creating a Provider
export const DocumentProvider = (props) => {
  const [list, setList] = useState([]);
  const [toast,setToast] = useState(false)
  return <DocumentContext.Provider value={{list,setList,toast,setToast}}>{props.children}</DocumentContext.Provider>;
};
