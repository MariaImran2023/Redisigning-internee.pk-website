import React from 'react';
import AnimatedText from './AnimatedText';
import './Home.css'; 
import incubation from "../incubation.jpg"
import pitb from "../nep.png"
import nic from "../nic.png"
import hero from "../hero.webp"
import { Link } from 'react-router-dom';
import fav from "../fav.png"
import cardImage from "../cardImage.webp"
import one from "../1.jpeg"
import two from "../2.jpeg"
import three from "../3.jpeg"
import why from "../programing.jpg"
import logo from '../logo.webp'; 


const Home = () => {
    const buttonStyle = {
        backgroundColor: '#29b816',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bolder',
        margin: '20px 0px 0px 0px',
        color: "white",
        border: "none"
      };
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="main-heading">
            Looking For dream internship?
          </h1>
          <h1 className="animated-heading">
            <AnimatedText />
          </h1>
          <p className="description">
            Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
          </p>
          <div style={{width: "100%"}}>
            <img src={incubation} alt='incubation' style={{maxWidth: '180px', margin: '20px 10px 10px 0px'}}></img>
            <img src={pitb} alt='pitb' style={{maxWidth: '75px', margin: '20px 10px 10px 10px'}}></img>
            <img src={nic} alt='nic' style={{maxWidth: '110px', margin: '20px 10px 10px 10px'}}></img>
          </div>
          
          <div className="flex-container">
            <div className="flex-item">
              <Link to="/job-portal">
                <button className="btn btn-success button-style"> Job Portal </button>
              </Link>
              <p style={{fontSize: "14px", marginTop: '10px',  fontStyle: "italic", fontWeight: 'bold'}}>Coming Soon</p>
            </div>
            <div className="flex-item">
              <Link to="/another-button">
                <button className="btn btn-success button-style2"> Our LMS </button>
              </Link>
              <p style={{fontSize: "14px", marginTop: '10px', fontStyle: "italic", fontWeight: 'bold'}}>90% Courses are in Urdu</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={hero} alt="internship" className="image" />
        </div>
      </div>

      <img className="fav" src={fav} alt= "fav"></img>
      <div className="container" style={{textAlign: 'center', width: '70%' }}>
        <h1 style={{fontSize: '30px', fontWeight: 'bold'}}>Who is internee.pk?</h1>
        <p style={{fontSize: '20px'}}>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
        <h3 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '50px'}}>Click Below and grab your internship now</h3>
      </div>

      {/* Cards Section */}
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card " style={{width: "18rem", marginTop: "50px"}}>
            <img src={cardImage} className="card-img-top" alt="card"/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Backend Development</h5>
              <Link to="/">
                <button className="btn btn-success" style={buttonStyle}>
                    Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{width: "18rem", marginTop: "50px"}}>
            <img src={cardImage}  className="card-img-top" alt="card"/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>App Development Internship</h5>
              <Link to="/">
                <button className="btn btn-success" style={buttonStyle}>
                    Apply Now
                </button>
              </Link>            
              </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{width: "18rem", marginTop: "50px"}}>
            <img src={cardImage}  className="card-img-top" alt="Card"/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Graphic Design</h5>
              <Link to="/">
                <button className="btn btn-success" style={buttonStyle}>
                    Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{marginTop: "50px"}}>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{width: " 18rem", marginTop: "50px"}}>
            <img src={cardImage}  className="card-img-top" alt="card"/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Chatbot Development</h5>
              <Link to="/">
                <button className="btn btn-success" style={buttonStyle}>
                    Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{width: "18rem", marginTop: "50px"}}>
            <img src={cardImage}  className="card-img-top" alt="card"/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Data Analytics</h5>
              <Link to="/">
                <button className="btn btn-success" style={buttonStyle}>
                    Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{width: "18rem", marginTop: "50px"}}>
            <img src={cardImage}  className="card-img-top" alt="Card"/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Figma Internship</h5>
              <Link to="/">
                <button className="btn btn-success" style={buttonStyle}>
                    Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Blogs Section */}
    <div className="row" style={{marginTop: "50px", backgroundColor: "#e6e7e8", padding: "20px"}}>
        <div className="col-md-12">
            <h2 style={{textAlign: "center", margin: "20px 0px 20px 0px", fontWeight: "bold"}}>Recent Blogs</h2>
        </div>


        <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
                <div className="card" style={{width: " 18rem", marginTop: "50px"}}>
                    <img src={one}  className="card-img-top" alt="card"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Complete all of the task but didn't get certification yet?</h5>
                        <p style={{marginTop: "30px"}}>Drop us a quick email at issues@internee.pk with the subject "Didn't get certification yet." Our team will swiftly resolve the matter, ensuring you get your recognition promptly.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center">
                <div className="card" style={{width: "18rem", marginTop: "50px"}}>
                    <img src={two}  className="card-img-top" alt="card"/>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Are you a tech expert looking to make a meaningful impact in the community?</h5>
                      <p style={{marginTop: "50px"}}>Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top. Your guidance and help may create a significant impact on some one's career.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center">
                <div className="card" style={{width: "18rem", marginTop: "50px"}}>
                    <img src={three}  className="card-img-top" alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Calling communities to Empower Students, Collaborate with Internee.pk!</h5>
                        <p style={{marginTop: "50px"}}>We'd love to discuss how a collaboration with Internee.pk can benefit your universites, socities, institutes and educational institutions and specially with students.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center">
                <div className="card" style={{width: "18rem", marginTop: "50px"}}>
                    <img src={one}  className="card-img-top" alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight: "bold", height: "50px"}}>Ready to Showcase Your Expertise? Follow These Simple Steps!</h5>
                        <p style={{marginTop: "30px"}}>To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container" style={{ marginTop: "50px" }}>
  <div className="row align-items-center">
    <div className="col-md-6">
      <h1 className="main-heading">Why internee.pk?</h1>
      <ul className="why-list">
        <li><span>5500+ Students already registered</span></li>
        <li><span>Task-based projects that offer hands-on experience</span></li>
        <li><span>Massive courses with high-quality videos on LMS</span></li>
        <li><span>Empowering youth towards IT revolution & technology</span></li>
        <li><span>Hands-on experience via virtual internships</span></li>
        <li><span>Direct collaboration with companies for direct hiring</span></li>
      </ul>
    </div>
    <div className="col-md-6">
      <img src={why} alt="internship" className="image" style={{ width: '100%', maxHeight: '400px' }} />
    </div>
  </div>
</div>

<div className="container" style={{ marginTop: "50px", backgroundColor: "#e6e7e8", padding: "20px" }}>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <img src={logo} alt="logo" style={{ width: "100%", marginTop: '30px' }} />
        </div>

        <div className="col-md-3 col-sm-6">
            <div>
                <h3>Company</h3>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </div>

        <div className="col-md-3 col-sm-6">
            <div>
                <h3>Get Help</h3>
                <p>Training Videos</p>
                <p>Request Help</p>
            </div>
        </div>

        <div className="col-md-3 col-sm-6">
            <div>
                <h3>Socialize with us</h3>
                <p>+923453191638</p>
                <p>info@internee.pk</p>
                <p>Copyright ©2024 internee.pk Pvt Ltd. All rights reserved.</p>
            </div>
        </div>
    </div>
</div>


    </>
  );
}

export default Home;
