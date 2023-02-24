import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

 class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
  }
  render(){
    return (
      <div className="wrapper">
          <Header />
          <Items items={this.state.items}/>
          <Footer />
      </div>
  )
  }
}

export default App;