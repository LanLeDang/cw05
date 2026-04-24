import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
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
        <DropdownButton
          id="typeDropdown"
          title={"Type"}
          onSelect={this.onSelect}
        >
          <MenuItem eventKey="all">All</MenuItem>
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetables">Vegetables</MenuItem>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
