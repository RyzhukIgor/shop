import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

 class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'stulseriy.jpg',
          desc: 'хороший стул',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'torsher.jpg',
          desc: 'хороший стул',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'stulseriy.jpg',
          desc: 'хороший стул',
          category: 'sofa',
          price: '49.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
          <Header orders={this.state.orders}/>
          <Items items={this.state.items} onAdd={this.addToOrder}/>
          <Footer />
      </div>
  )
  }

  addToOrder(item) {
    let isInArr = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArr = true
    })
    if(!isInArr)
this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;