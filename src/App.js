import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullCard from "./components/ShowFullCard";

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
            showFullItem: false,
            fulItem: {},
        };

        this.state.currentItems = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);
    }
    render() {
        return (
            <div className="wrapper">
                <Header
                    orders={this.state.orders}
                    onDelete={this.deleteOrder}
                />
                <Categories chooseCategory={this.chooseCategory} />
                <Items
                    onShowItem={this.onShowItem}
                    items={this.state.currentItems}
                    onAdd={this.addToOrder}
                />
                {this.state.showFullItem && (
                    <ShowFullCard
                        item={this.state.fullItem}
                        onAdd={this.addToOrder}
                        onShowItem={this.onShowItem}
                    />
                )}
                <Footer />
            </div>
        );
    }

    onShowItem(item) {
        this.setState({ fullItem: item });
        this.setState({ showFullItem: !this.state.showFullItem });
    }

    chooseCategory(category) {
        if (category === "all") {
            this.setState({ currentItems: this.state.items });
            return;
        }
        this.setState({
            currentItems: this.state.items.filter(
                (el) => el.category === category
            ),
        });
    }

    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter((el) => el.id !== id),
        });
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
