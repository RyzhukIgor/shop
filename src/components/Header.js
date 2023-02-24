import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map((el) => (
                <Order key={el.id} 
                item={el}
                onDelete={props.onDelete}/>
            ))}
            <p className="sum">Сумма: {new Intl.NumberFormat().format(sum)}$</p>
        </div>
    );
};

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    )
}

export default function Header(props) {
    let [cardOpen, setCardOpen] = useState(false);

    return (
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaCartArrowDown
                    onClick={() => setCardOpen((cardOpen = !cardOpen))}
                    className={`icon-shop ${cardOpen && "active"}`}
                />
                {cardOpen && (
                    <div className="shop-card">
                        {props.orders.length > 0
                            ? showOrders(props)
                            : showNothing()}
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    );
}
