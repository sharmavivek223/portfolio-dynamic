import React, { useContext } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Skill from "./Skill";
import UserDataContext from "../../UserDataContext";
import './style.css';
const MySkill = (props) => {
      const skills=useContext(UserDataContext).skills;
  return (
    <MDBContainer className="text-center text-white">
      <h2 id="skills" className="my-5" style={{fontWeight:'500'}}>My Skills</h2>
      <MDBRow  className="skills-row justify-content-center mb-5">
            {skills.map((item,i)=>(<Skill key={i} color={item.color} icon={item.icon}>
              {item.value}
        </Skill>))}
      </MDBRow>
      <hr/>
    </MDBContainer>
  );
};
export default MySkill;
