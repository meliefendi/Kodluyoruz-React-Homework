import { createContext, useState, useEffect, useContext } from "react";

const CreateInputContext = createContext();

export const CreateInputProvider = ({ children }) =>{
    const [ inputCity, setInputCity ] = useState(localStorage.getItem("city") || "İzmir");

    const values = {
        inputCity,
        setInputCity
    }

    useEffect(()=>{
        localStorage.setItem("city", inputCity)
    },[inputCity])

    return(
        <div>
            <CreateInputContext.Provider value={values}>
                { children }
               
            </CreateInputContext.Provider>
        </div>
    )
} 

export const useInputContext = () => useContext(CreateInputContext);
