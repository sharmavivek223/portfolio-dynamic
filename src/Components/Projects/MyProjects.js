import React, { useState, useEffect, useContext } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";
import "./style.css";
import Project from "./Project";
import UserDataContext from "../../UserDataContext";

const Pill = (props) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${props.activePill === props.id && "active"}`}
        onClick={props.togglePills(props.id)}
      >
        {props.skill}
      </a>
    </li>
  );
};

const makeArrWithKey = (arr) => {
  let outArr = [];
  Object.entries(arr).forEach(([key, value]) => {
    value.forEach((item) => {
      outArr.push({ ...item, skill: key });
    });
  });
  return outArr;
};
const MyProjects = (props) => {
  const projects = useContext(UserDataContext).projects;

  const [activePill, setActivePill] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [skillsUsed] = useState(["All", ...Object.keys(projects)]);
  const [activeSkill, setActiveSkill] = useState(skillsUsed[0]);
  const [modalData, setModalData] = useState(null);

  const toggle = () => {
    setModalVisible(!modalVisible);
  };
  const togglePills = (tab) => () => {
    if (activePill !== tab) {
      setActivePill(tab);
    }
  };

  useEffect(() => {
    setActiveSkill(skillsUsed[activePill]);
  }, [activePill,skillsUsed]);

  return (
    <MDBContainer id="projects" className="text-center text-white mb-5">
      {modalData && (
        <MDBModal isOpen={modalVisible} toggle={toggle}>
          <MDBModalHeader
            className="unique-color-dark text-white"
            toggle={toggle}
          >
            {modalData.title}
          </MDBModalHeader>
          <MDBModalBody className="unique-color">
            <div class="scrollbar scrollbar-primary">
              <div class="force-overflow">
                {modalData && (
                  <div className="text-center">{modalData.extended_desc}</div>
                )}
                {"yt_video_id" in modalData && <hr />}
                {"yt_video_id" in modalData && (
                  <div className="iframe-container">
                    <iframe
                      title={modalData.title}
                      src={`https://www.youtube-nocookie.com/embed/${modalData.yt_video_id}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                )}
                {"yt_video_id" in modalData && "images" in modalData && <hr />}
                {"images" in modalData && (
                  <MDBRow className="justify-content-center mt-2">
                    {modalData.images.map((url, i) => (
                      <MDBCol key={i} md="6" lg="4" className="mb-3">
                        <img
                          src={process.env.PUBLIC_URL + url}
                          class="img-fluid "
                          alt=""
                        />
                      </MDBCol>
                    ))}
                  </MDBRow>
                )}
              </div>
            </div>
          </MDBModalBody>
        </MDBModal>
      )}

      <h2 id="skills" className="my-5" style={{fontWeight:'500'}}>My Projects</h2>
      <MDBCard className="unique-color">
        <ul
          className="nav justify-content-between nav-pills mb-1 mt-4"
          id="pills-tab"
          role="tablist"
        >
          {skillsUsed.map((skill, i) => (
            <Pill
              skill={skill}
              key={i}
              id={i}
              activePill={activePill}
              togglePills={togglePills}
            />
          ))}
        </ul>
        <hr />
        <MDBContainer>
          <MDBRow className="justify-content-center">
            {makeArrWithKey(projects).map((item, i) => (
              <Project
                key={i}
                activeSkill={activeSkill}
                data={item}
                toggleModal={toggle}
                setModalData={setModalData}
              />
            ))}
          </MDBRow>
        </MDBContainer>
      </MDBCard>
    </MDBContainer>
  );
};

export default MyProjects;
