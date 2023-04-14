//useState kullanabilmemiz için tanımlanan modüldür.
import { useState, useEffect } from "react";

//daha pratik olması için bu tanımı ayarladık.
const initialHeaderValue = ({ listElement: "", isActive: true })

//parametre olarak app.js den gelen propsları yani useStateleri verdik çünkü burdan oraya veri akışını bu şekilde sağlıyoruz.
function Header({ contacts, setContacts }) {

    //bu sayfa içerisinde verileri yönetmek için state oluşturuyoruz ve state içerisindeki veri 1 den fazla olduğu için içerisini object metoduyla oluşturuyoruz.
    const [form, setForm] = useState(initialHeaderValue)

    useEffect(() => {
        setForm(initialHeaderValue)
    }, [])

    //conctacts dizisinde herhangi bir değişiklik olduğu vakit useEffect içerisindeki setForm çalışacak.
    useEffect(() => {
        setForm(initialHeaderValue)
        console.log(contacts)
    }, [contacts]);

    //verilen hedefteki değerin value'su her değiştiğinde consola yazdırıyoruz ve değişen değerleri setForm state'ine o da form state'ine gönderiyor. 
    const onChangeInput = (e) => {

        //inputta herhangi bir değişiklik olduğu vakit bu değerler geçerli olacak.
        setForm({ listElement: e.target.value, isActive: true })


    }

    //2submit fonksiyonu ayarladık çünkü form submit edildiğinde istediğimiz verileri contacts'a gönderebilmek için. onChange'de veriler form'a, formdaki veriler setContacts prop'u aracılığıyla contacts state'ine oradan da bileşenlere aktarılıyor.
    const onSubmit = (e) => {

        //3form submit edildiğinde yenileme işlemini durdurur.
        e.preventDefault()

        //koşul tanımladık.inputa boş değer girilirse herhangi bir işlem yapılmayacak
        if (form.listElement === "") {
            return false;
        }

        //forma girilen değerleri submit edildiği vakit contacts state'ine yollayacak.
        setContacts([...contacts, form])

    }

    return (

        //1bize verilen hazır html kodlarını buraya ayarladık jsx formatında.
        <div>
            <header className="header">
                <h1>todos </h1>
                <form onSubmit={onSubmit}>

                    <input

                        className="new-todo"
                        //onChange ve useEffect için hedef, value sayesinde belirlendi.
                        value={form.listElement}
                        autoFocus onChange={onChangeInput}
                        placeholder="What needs to be done?"

                    />

                </form>
            </header>
            <div className="main">
                {/* 
                onClick işlemi atadık. tıklandığı vakit contacts içerisindeki veriler yeni değişkene atanacak ve bulunduğu durumun tam tersi olacak true ise false false ise true ve daha sonra setContacts state sayesinde contacts içerisinde son veri atanacak. */}
                <input
                    className="toggle-all"
                    type="checkbox"
                    onChange={onChangeInput}
                />
                <label htmlFor="toggle-all" onClick={() => {
                    const newArray = [...contacts]
                    newArray.map((item) => {
                        item.isActive = !item.isActive
                    })

                    setContacts([...newArray])
                }}>
                    Mark all as complete
                </label>
            </div>
        </div>
    )
}

export default Header;