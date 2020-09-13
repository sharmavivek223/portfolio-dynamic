import React, { useCallback, useEffect, useState, Fragment } from "react";
import MyNav from "./MyNav";
import Hero from "./Hero";
import About from "./About/About";
import axios from "axios";
import UserDataContext from "../UserDataContext";
import MySkill from "./Skills/MySkill";
import Footer from "./Footer";
import MyProjects from "./Projects/MyProjects";

const Home = (props) => {
  let [responseData, setResponseData] = useState("");
  const fetchData = useCallback(() => {
    axios(process.env.PUBLIC_URL + "/data/userData.json")
      .then((response) => {
        setResponseData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  

  return (
    <Fragment>
      {responseData && (
        <div>
          <UserDataContext.Provider value={responseData}>
            <MyNav />
            
            <Hero />
            <About />
            <MySkill/>
            <MyProjects/>
            
            <Footer/>
          </UserDataContext.Provider>
        </div>
      )}
      
    </Fragment>
  );
};

export default Home;
