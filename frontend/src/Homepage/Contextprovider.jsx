import React, { createContext, useState } from "react";
import Usercards from "./Usercards";

const newcontext = createContext();
const Contextprovider = ({children}) => {
    const [fetch, setfetch] = useState([]);
    console.log(fetch);
  return (
    <div>
      <newcontext.Provider value={{ fetch, setfetch }}>
        {children}
      </newcontext.Provider>
    </div>
  );
};

export default Contextprovider;
export {newcontext}
