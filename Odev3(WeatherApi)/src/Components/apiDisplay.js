import React from "react";
import { useApiContext } from "../Context/api"

function ApiDisplay() {
    const { api } = useApiContext();

    if (!api) {
        return <div><p>Yükleniyor...</p></div>
    }

    return (
        <div className="">
           
            <div className="row">
                {api.list.map((item, index) => {
                    if (index % 7 === 0) {
                        
                        return (
                            <div key={index} className="col-6 col-md-3 col-lg-2 rounded-5">
                                <div className={`border rounded-1 ${"border-light"}`}>
                                    <h3 className='mt-3'>{new Date(item.dt * 1000).toString().split(' ')[0]}</h3>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                        alt='weatherIMG' />
                                    <p><span>{item.main.temp_max.toFixed(1)}° / {item.main.temp_min.toFixed(1)}°</span></p>
                                    
                                    <p>{item.dt_txt}</p>
                                  
                                    <p>{item.weather[0].main}</p>
                                    <p>{item.weather[0].description}</p>
                                    {api.city.name.toUpperCase()}
                                  
                                </div>
                            </div>
                         
                        )
                    }
                   
                })}
               
            </div>
            
        </div>
    )
}

export default ApiDisplay;
