import React, { useContext } from "react";
import { MDBContainer} from "mdbreact";
import UserDataContext from "../../UserDataContext";

const About = (props) => {
  const aboutData=useContext(UserDataContext).about;
  return (
    <MDBContainer className="text-center my-5 text-white" id="about">
      <h2 className="my-5" style={{fontWeight:'500'}}>About Me</h2>
      <p align="justify" className="mb-5">
        {aboutData.content}
      </p>
      <hr/>
    </MDBContainer>
  );
};

export default About;
