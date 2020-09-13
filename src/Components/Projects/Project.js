import React, { Fragment } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol
} from "mdbreact";


const Project = (props) => {

  const onViewClick=()=>{
    props.setModalData(props.data); 
    props.toggleModal();
  }

  return (
    <Fragment>
      {(props.activeSkill===props.data.skill || props.activeSkill==="All") && (
          <MDBCol lg="4" md="6" sm="12">
        <MDBCard className="mb-4 animated fadeIn">
            <div className="view overlay card-img-top" onClick={() =>{onViewClick()}}>
  <img src={process.env.PUBLIC_URL + props.data.preview_img} className="img-fluid" alt=""/>
  <div className="mask flex-center waves-effect waves-light rgba-blue-light">
      <h4 className="white-text">{props.data.title}</h4>
  </div>
</div>
          
          <MDBCardBody>
            <MDBCardText>
             {props.data.description}
            </MDBCardText>
            <MDBBtn color="blue" onClick={() =>{onViewClick()}}>
              View More
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      )}
    </Fragment>
  );
};

export default Project;
