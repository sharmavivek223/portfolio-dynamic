import React, { useContext } from 'react';
import { MDBMask, MDBView } from 'mdbreact';
import UserDataContext from '../UserDataContext';
import ContentGen from './ContentGen';


const Hero =(props)=>{
    const heroData=useContext(UserDataContext).hero;
    
    return (
        <main>
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="mdb-color-light" className="flex-center flex-column text-center px-3">
            <img src={process.env.PUBLIC_URL + heroData.profile_image} className="img-fluid z-depth-2 rounded-circle mb-3" alt="" />
            <div>
              <ContentGen data={heroData.content}/>
              </div>
            </MDBMask>
          </MDBView>
        </main>
    );
}

export default Hero;