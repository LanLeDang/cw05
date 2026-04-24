import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList";

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetables" },
  { name: "Cucumber", type: "Vegetables" },
  { name: "Eggplant", type: "Vegetables" },
  { name: "Squash", type: "Vegetables" },
  { name: "Bell pepper", type: "Vegetables" },
  { name: "Onion", type: "Vegetables" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <hr />
        <Counter />
        <hr />
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;
