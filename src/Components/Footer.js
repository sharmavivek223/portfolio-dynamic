import React,{useContext} from 'react';
import UserDataContext from '../UserDataContext';
const Footer=(props)=>{
  const data = useContext(UserDataContext);
    return (
        <footer className="page-footer font-small unique-color darken-3" style={{bottom:'0'}}>

  
  <div className="container">

    <h2 className="text-center pt-3" style={{fontWeight:'500'}}>Contact Me</h2>
    <div className="row">

      {/* <!-- Grid column --> */}
      <div className="col-md-12 py-2">
        <div className="mb-5 flex-center">
        {data.contact.map((item,i) => (
                    <a key={i} href={item.url}>
                      <img className="mr-md-5 mr-3" src={item.icon} width="50" height="50" alt=""/>
                      </a>
                    
                  ))}

          
        </div>
      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row--> */}

  </div>
  

  
  <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright :
        <a href="/">{' '}{data.copyright_text}</a>
  </div>
  

</footer>
    );
}

export default Footer;