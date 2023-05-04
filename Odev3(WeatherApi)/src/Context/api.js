import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { useInputContext } from "./inputContext";

const apiContext = createContext();



export function ApiProvider({ children }) {
    const { inputCity } = useInputContext();

    const [api, setApi] = useState("");

    const values = {
        api,
        setApi
    };
    // const [ cityName ] = useState("istanbul")

    // const APIkey = "dddc0b1e792c4517a38130027230305"
    // const APIkey = "d4eba4bb3a2cd6ed0bb563ded94832da"

    // useEffect(() => {
    //     // axios(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${inputCity}&aqi=no`)
    //         axios(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${APIkey}`)
    //         .then((res) => setApi(res.data))
    //         .catch((err) => console.log(err))
    // })

   
    useEffect(() => {
        const getWeatherDataCity = async (inputCity) => {
            const key = "9709ee4dbe40843a2c8e1def5fb7e096";

            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&units=metric&appid=${key}`);
                setApi(data);
            } catch {
                alert("Veri Alınırken Bir hata oluştu.");
            }
        }
        inputCity && getWeatherDataCity(inputCity);       
    })


    return (
        <div>
            <apiContext.Provider value={values}>
                {/* {JSON.stringify(api)} */}
                {children}
            </apiContext.Provider>
        </div>
    )
}

export const useApiContext = () => useContext(apiContext);

