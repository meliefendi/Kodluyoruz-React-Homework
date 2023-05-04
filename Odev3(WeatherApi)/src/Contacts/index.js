// import Api from "../Context/api";
import Input from "../Components/input";
import ApiDisplay from "../Components/apiDisplay";

function Contacts() {
    return (
        <div className="contacts">                  
            <div className="apiWeather">
            <Input />
            <ApiDisplay />
            </div>
           
        </div>
    )
}

export default Contacts;