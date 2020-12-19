import React from "react";

function FilterBed(props) {
  return (
    <form>
      <div className="form-group" style={{width: "150px",display:"inline !important"}}>
       
             <select className="form-control" Style={"width: 150px;display:inline !important"}
                 onChange={props.handleBeds}
                 value={props.value}   
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
        
      </div>
    </form>
  );
}

export default FilterBed;