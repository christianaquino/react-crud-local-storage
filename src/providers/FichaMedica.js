import { createContext, useState } from "react";
import initialData from "../data/initialData";

//create a context, with createContext api
export const FichaMedicaContext = createContext();

const FichaMedicaProvider = (props) => {
  // this state will be shared with all components
  const [fichaMedicaList, setFichaMedicaList] = useState(initialData);

  return (
    // this is the provider providing state
    <FichaMedicaContext.Provider value={[fichaMedicaList, setFichaMedicaList]}>
      {props.children}
    </FichaMedicaContext.Provider>
  );
};

export default FichaMedicaProvider;
