import React, { Component } from "react";

const styles = {
  // css for round search bar in the center of the page
  search: {
    width: "50%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
    border: "none",
    borderRadius: "9px",
    backgroundColor: "#f2f2f2",
  },

};
 
class Main extends Component {
  state = {
    searchTerm: "",
  };

  // function to handle search bar input
  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
 
  handleSearch = () => {
    const { searchTerm } = this.state;
    console.log("Performing search for: ", searchTerm);
  };


  render() {
    const { searchTerm } = this.state;

    return (
        <div>
          <h1>Rate My Professor EU</h1>
          <input type="text" 
          placeholder="Search for a professor" 
          value={searchTerm} 
          style={styles.search}
          onChange={this.handleInputChange}/>
          <button onClick={this.handleSearch}>Search</button>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;