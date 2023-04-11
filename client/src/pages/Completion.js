import { React, createContext, useState, useEffect,useContext } from "react";

import { AppContext } from '../components/AppContext';


function Completion(props) {
  const { global_temp, updateMyVariable } = useContext(AppContext);
  return <h1>Here{global_temp}</h1>;
}

export default Completion;
