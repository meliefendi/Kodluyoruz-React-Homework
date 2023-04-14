
//diğer sayfalardan veri alışverişini sağlıyoruz.
function List({ contacts, setContacts, situation }) {
    return (
        <section className="main">
            <ul className="todo-list">
                {
                    //contacts veri tabanındaki verileri map ile listeleme işlemi yapıyoruz.
                    contacts.map((item, index) => {
                        // eğer gelen veri "All" ise tüm ögeleri gösteriyoruz.
                        if (situation === "All") {
                            return (
                                <li className={item.isActive ? "" : "completed"} key={index}>
                                    <div className="view">
                                        <input
                                            id={`item-${index}`}
                                            //burada checked değeri varsayılan durumun tersi olarak ayarlandı.
                                            checked={!item.isActive}
                                            className="toggle"
                                            type="checkbox"

                                            //onChange ile checked değeri değiştiriyoruz.
                                            onChange={() => {
                                                let array = [...contacts]
                                                array[index].isActive = !array[index].isActive;
                                                setContacts(array)
                                            }}
                                        />
                                        <label htmlFor={`item-${index}`}>{item.listElement}</label>
                                        {/* burada onClick ile silme işlemi yapıyoruz.seçilen değer ile indexi karşılaştırılıp  eşit olmayan veriler yeni diziye atılır ve setContacts ile array2'ye gönderilir. yani contacts'e */}
                                        <button className="destroy"
                                            onClick={() => {
                                                let array2 = [...contacts]
                                                array2 = array2.filter(function (value) {
                                                    return value !== array2[index];

                                                });
                                                setContacts(array2)
                                            }}
                                        ></button>
                                    </div>
                                </li>
                            )
                            //burada situation a gelen veri "Active" ise aktif ögeleri gösteriyoruz.
                        } else if (situation === "Active") {
                            if (item.isActive) {
                                return (
                                    <li key={index}>
                                        <div className="view">
                                            <input
                                                id={`item-${index}`}
                                                 //burada checked değeri varsayılan durumun tersi olarak ayarlandı.
                                                checked={!item.isActive}
                                                className="toggle" type="checkbox"
                                                //onChange ile checked değeri değiştiriyoruz.
                                                onChange={() => {
                                                    let array = [...contacts];
                                                    array[index].isActive = !array[index].isActive;
                                                    setContacts(array)
                                                }}
                                            />
                                            <label htmlFor={`item-${index}`}>{item.listElement}</label>
                                             {/* burada onClick ile silme işlemi yapıyoruz.seçilen değer ile indexi karşılaştırılıp  eşit olmayan veriler yeni diziye atılır ve setContacts ile array2'ye gönderilir. yani contacts'e */}
                                            <button className="destroy"
                                                onClick={() => {
                                                    let array2 = [...contacts];
                                                    array2 = array2.filter(function (value) {
                                                        return value !== array2[index];
                                                    });
                                                    setContacts(array2)
                                                }}
                                            ></button>
                                        </div>
                                    </li>
                                )
                            }
                            //burada situation a gelen veri "Completed" ise completed ögeleri gösteriyoruz.
                        } else if (situation === "Completed") {
                            if (!item.isActive) {
                                return (
                                    <li key={index}>
                                        <div className="view">
                                            <input
                                                id={`item-${index}`}
                                                 //burada checked değeri varsayılan durumun tersi olarak ayarlandı.
                                                checked={!item.isActive}
                                                className="toggle" type="checkbox"
                                                //onChange ile checked değeri değiştiriyoruz.
                                                onChange={() => {
                                                    let array = [...contacts]
                                                    array[index].isActive = !array[index].isActive;
                                                    setContacts(array)
                                                }}
                                            />
                                            <label htmlFor={`item-${index}`}>{item.listElement}</label>
                                             {/* burada onClick ile silme işlemi yapıyoruz.seçilen değer ile indexi karşılaştırılıp  eşit olmayan veriler yeni diziye atılır ve setContacts ile array2'ye gönderilir. yani contacts'e */}
                                            <button className="destroy"
                                                onClick={() => {
                                                    let array2 = [...contacts];
                                                    array2 = array2.filter(function (value) {
                                                        return value !== array2[index];
                                                    });
                                                    setContacts(array2)
                                                }}
                                            ></button>
                                        </div>
                                    </li>
                                )
                            }
                        }
                    })


                }
            </ul>
        </section>
    )
}

export default List;