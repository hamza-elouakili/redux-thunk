import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ItemList1 from './examples/ItemList_ex1'
import ItemList2 from './examples/ItemList_ex2'

class App extends Component {
  render() {
    return (
      <div>
        <ItemList1 />
        <ItemList2 />
      </div>
    )
  }
}

export default App
