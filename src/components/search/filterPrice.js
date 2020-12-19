
import React from "react";

function FilterPrice(props) {
  return (
    <form>
      <div className="form-group" style={{width: "170px",display:"inline !important"}}>
      &nbsp;&nbsp;&nbsp;
           
           <select className="form-control" Style={"width: 150px;display:inline !important"}
               onChange={props.handlePrice}
               value={props.value}
           >
           <option value="-1">Max Price</option>
               <option value="500000">500K</option>
               <option value="750000">750K</option>
               <option value="1250000">1.25M</option>
               <option value="1500000">1.5M</option>
               <option value="2000000">2.0M</option>
               <option value="2500000">2.5M</option>
           </select>
            
            &nbsp;&nbsp;&nbsp;
        <br />
      </div>
    </form>
  );
}

export default FilterPrice;
