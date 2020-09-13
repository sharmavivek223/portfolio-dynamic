import React, { Fragment } from "react";
import Footer from "./Footer";
import MyNav from "./MyNav";
import { MDBView, MDBMask, MDBBtn } from "mdbreact";

const ErrorPage = () => {
  return (
    <Fragment>
      <MyNav />
      <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
        <MDBMask
          overlay="mdb-color-light"
          className="flex-center flex-column text-white text-center px-3"
        >
          <h2>404</h2>
          <h5>You landed on incorrect link</h5>
          <MDBBtn style={{ backgroundColor: "#3F729B" }} href="/">
            Go To Home Page
          </MDBBtn>
        </MDBMask>
      </MDBView>
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
