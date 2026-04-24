import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all",
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  onSelect = (eventKey) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const searchMatch =
      item.name.toLowerCase().search(this.state.search) !== -1;
    const typeMatch =
      this.state.type === "all" || item.type === this.state.type;
    return searchMatch && typeMatch;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        <Dropdown onSelect={this.onSelect} style={{ marginBottom: "20px" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type:{" "}
            {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="Vegetables">Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br />
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
          style={{ padding: "10px", width: "300px" }}
        />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
