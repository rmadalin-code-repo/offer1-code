import React, { Component } from "react";
import homes from '../../homes.json'
import HomeCardDetails from '../layout/houseCardDetails'
import './style.css'

class HouseDetails extends Component {
    
  state = {
    homeData: homes,
    homeList: homes,
  };

  showDetails = event => {
    let homeList = [];
    if(event.target.value > 0) {
        this.setState({ searchHouse: event.target.value });

        let house = this.state.homeData.filter(home => {
            return ((home.id)+"").includes((event.target.value)+"")
        });
        const homeList = house;
        this.setState({ homeList });
    } else {
        homeList = homes
        this.setState({ homeList });
    }    
  }

  
  render() {
    

    return (

      <div className="main">
        {this.state.homeList.map(home => (
          <HomeCardDetails
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


export default HouseDetails;
