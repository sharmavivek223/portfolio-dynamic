import React from 'react';
import {  MDBBadge, MDBCol } from "mdbreact";
const Skill=(props)=>{
    return (<MDBCol className="mb-3 mr-2">
      
      <MDBBadge pill color={props.color} className="p-2">
      {props.icon && <img src={props.icon} width="30" height="30" alt=""/>}
      <span className="h3-responsive pl-1">
       {props.children}
       </span>
      </MDBBadge>
  </MDBCol>);
}

export default Skill;