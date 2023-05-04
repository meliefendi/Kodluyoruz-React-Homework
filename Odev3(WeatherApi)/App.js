import "./App.css";
import Contacts from "./Contacts";
import { CreateInputProvider } from "./Context/inputContext";
import { ApiProvider } from "./Context/api"


const App = () => {
    return (
        <div>

            <CreateInputProvider>
                <ApiProvider>
                    <Contacts />

                </ApiProvider>
            </CreateInputProvider>
        </div>
    )
}

export default App;