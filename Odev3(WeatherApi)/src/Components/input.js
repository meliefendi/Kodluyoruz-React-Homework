
import { useFormik } from 'formik';
import { useInputContext } from '../Context/inputContext';
import { useEffect } from 'react';


function Input() {
    const { inputCity, setInputCity } = useInputContext();

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            cityNameButton: "",
        },
        onSubmit: (values) => {
            setInputCity(values.cityNameButton);
        }
    })

    const handlChange = (e) => {
        setInputCity(e.target.value)
    }

    return (
        <div className=''>
            <h1> Hava Durumu API </h1>
            {
                <form onSubmit={handleSubmit}>
                    <div>
                        <select name='cityNameButton' className='rounded-1' value={inputCity} onChange={handlChange}>

                            <option hidden >Şehir Seçin</option>
                            <option value="izmir">İzmir</option>
                            <option value="istanbul">İstanbul</option>
                            <option value="bartin">Bartin</option>
                            <option value="konya">Konya</option>
                            <option value="kastamonu">Kastamonu</option>
                        </select>

                    </div> <br />
                    <div>
                       
                        <input name='cityNameButton' className='rounded-1' placeholder='veya şehir ismi girin' value={values.cityNameButton} onChange={handleChange} ></input>
                        &nbsp;


                        <button type='submit' className="btn btn-outline-dark btn-sm">Gönder</button>
                    </div> <br /><br /><br />
                </form>
            }

        </div>
    )
}

export default Input;

// export default İnput;
// useEffect(() => {
//     async function getApi() {
//         try {
//             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
//                 .then((res) => setApi(res.data))

//         } catch (error) {
//             console.error(error);
//         }
//     }
//     getApi();
// })