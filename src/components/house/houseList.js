import React, { Component } from "react";
//import Search from "../Search"
//import "./style.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import homes from '../../homes.json'
import HomeCard from '../layout/houseCard'
import FilterCity from '../search/filterCity'
import FilterBed from '../search/filterBed'
import FilterPrice from '../search/filterPrice'
import './style.css'

class HouseList extends Component {
    
  state = {
    homeData: homes,
    homeList: homes,
    searchCity: [],
    searchBed: [],
    searchPrice: []
  };

  handleBeds = event => {
    let homeList = [];
    if(event.target.value > 0) {
        this.setState({ searchBed: event.target.value });

        let city = this.state.homeData.filter(home => {
            return ((home.property.numberBedrooms)+"").includes((event.target.value)+"")
        });
        const homeList = city;
        this.setState({ homeList });
    } else {
        homeList = homes
        this.setState({ homeList });
    }    
  }

  handlePrice = event => {
    let homeList = [];
    if(event.target.value > 0) {
        this.setState({ searchPrice: event.target.value });
    
        let city = this.state.homeData.filter(home => {
        //console.log(person.name.first)
        return home.price < event.target.value
        });
         homeList = city;
        this.setState({ homeList });
    } else {
        homeList = homes
        this.setState({ homeList });
    }
  }

  handleInputChange = event => {
    this.setState({ searchCity: event.target.value });

    let city = this.state.homeData.filter(home => {
      //console.log(person.name.first)
      return home.property.address.city.includes(event.target.value)
    });
    const homeList = city;
    this.setState({ homeList });
  }

  render() {
    

    return (

      <div className="main">
        <div Style={"display: flex;"}> 
            <FilterCity value={this.state.searchCity} handleInputChange={this.handleInputChange} />
            <FilterBed value={this.state.searchBed} handleBeds={this.handleBeds} />    
            <FilterPrice value={this.state.searchPrice} handlePrice={this.handlePrice} /> 
        </div>     
        {this.state.homeList.map(home => (
          <HomeCard
            image={home.property.primaryImageUrl}
            id={home.id}
            bed={home.property.numberBedrooms}
            bath={home.property.numberBaths}
            sq={home.property.squareFeet}
            address={home.property.address.addressLine1} 
            city={home.property.address.city}
            state={home.property.address.state}
            zip={home.property.address.zip}
          />
        ))}

      </div>

    );
  }


}


export default HouseList;
