import { useState, useEffect } from "react";

function Footer({ contacts, setContacts, situation, setSituation }) {

    const [activeSize, setActiveSize] = useState(0);


//aktif butonların gösteren fonksiyon.yani completedlar gösterilmeyip active'ler gösteriliyor. 
    const activeButton = () => {
        const array = contacts.filter(item => item.isActive);
        setContacts(array)
    }
//situation'a hedef veri gönderilmesi için fonksiyon
    const onClickAvailable = (e) => {
        setSituation(e.target.name)
    }
//contacts dizisine her veri giriş çıkışında çalışacak fonksiyon ve işlevi active olan verilerin sayısını tutmak.
    useEffect(() => {
        setActiveSize(0)
        contacts.map((item) => {
            if (item.isActive) {
                setActiveSize(n => n + 1)
            }
        })
    }, [contacts])
    return (

        <footer className="footer">
            <span className="todo-count">
                <strong>{activeSize}</strong>
                items left
            </span>
            {/* situation'a gelen değerler bu kısımdan gönderiliyor. yani "All", "Active" , "Completed" */}
            <ul className="filters">

                <li>
                    <a href="#/" name="All" className={situation === "All" ? "selected" : ""} onClick={onClickAvailable}>All</a>
                </li>
                <li>
                    <a href="#/" name="Active" className={situation === "Active" ? "selected" : ""} onClick={onClickAvailable}>Active</a>
                </li>
                <li>
                    <a href="#/" name="Completed" className={situation === "Completed" ? "selected" : ""} onClick={onClickAvailable}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={activeButton}>
                Clear completed
            </button>



            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </footer>
    )
}

export default Footer;