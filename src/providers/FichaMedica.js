import { createContext, useState, useEffect } from "react";
import initialData from "../data/initialData";

//create a context, with createContext api
export const FichaMedicaContext = createContext();

const FichaMedicaProvider = (props) => {
  const data = localStorage.getItem("fichaMedicaList")
    ? JSON.parse(localStorage.getItem("fichaMedicaList"))
    : initialData;
  // this state will be shared with all components
  const [fichaMedicaList, setFichaMedicaList] = useState(data);

  useEffect(() => {
    localStorage.setItem("fichaMedicaList", JSON.stringify(fichaMedicaList));
  }, [fichaMedicaList]);

  return (
    // this is the provider providing state
    <FichaMedicaContext.Provider value={[fichaMedicaList, setFichaMedicaList]}>
      {props.children}
    </FichaMedicaContext.Provider>
  );
};

export default FichaMedicaProvider;
