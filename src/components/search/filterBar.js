import React, { Component } from 'react'
import './style.css'

class Search extends Component {
    
    
    render() {
      return (
        <div className="filter" > 
        <form >
           
           <input
                onChange={this.handleInputChange}
                value={this.value}
                name="city"
                type="text"
                className="form-control"
                placeholder="Search by city..."
                id="search"
                Style={"width: 175px;display:inline !important"}
            />
           
               &nbsp;&nbsp;&nbsp;
             
            <select className="form-control" Style={"width: 95px; display:inline !important"}
                onChange={this.handleBeds}
                value={this.value}   
            >
                <option value="">Beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
           
           &nbsp;&nbsp;&nbsp;
           
            <select className="form-control" Style={"width: 125px;display:inline !important"}
                onChange={this.handlePrice}
                value={this.value}
            >
            <option value="">Max Price</option>
                <option value="1">500K</option>
                <option value="2">750K</option>
                <option value="3">1.25M</option>
                <option value="4">1.5M</option>
                <option value="5">2.0M</option>
                <option value="6">2.5M</option>
            </select>
           
           
        </form>
        </div>
      );
    }
  }
export default Search;