import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Стул серый",
                    img: "stulseriy.jpg",
                    desc: "хороший стул",
                    category: "chairs",
                    price: "49.99",
                },
                {
                    id: 2,
                    title: "Стол",
                    img: "torsher.jpg",
                    desc: "хороший стул",
                    category: "tables",
                    price: "49.99",
                },
                {
                    id: 3,
                    title: "Диван",
                    img: "stulseriy.jpg",
                    desc: "хороший стул",
                    category: "sofa",
                    price: "49.99",
                },
            ],
        }

        this.state.currentItems=this.state.items
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory} />
                <Items items={this.state.currentItems} onAdd={this.addToOrder} />
                <Footer />
            </div>
        );
    }

chooseCategory(category){
    this.setState({
        currentItems: this.state.items.filter(el =>
            el.category === category)
    })
}

deleteOrder(id) {
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

    addToOrder(item) {
        let isInArr = false;
        this.state.orders.forEach((el) => {
            if (el.id === item.id) isInArr = true;
        });
        if (!isInArr) this.setState({ orders: [...this.state.orders, item] });
    }
}

export default App;
