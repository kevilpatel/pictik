/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { get } from "jquery";
import SectionButtons from "views/index-sections/SectionButtons";
// function RegisterPage() {
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("register-page");
//     return function cleanup() {
//       document.body.classList.remove("register-page");
//     };
//   });


const Logins=()=>{
  const [mobileNo,setMobileNo] = useState("")
  const [dashboard,setDashboard]=useState(true);
  const [StudioId,setStudioId]=useState("")
  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('user-info')){
      // history.push("/")
    }
  },[])

  async function login(){
    
    console.log(mobileNo)
    let item = {mobileNo};
    let result = await fetch("http://pictick.itfuturz.com/api/AppAPI/CustomerLogin?mobileNo="+mobileNo,{
      method:'GET'
    }).then(res=>res.json()).then(data=>{
      if(data.Data.length>0){
        setStudioId(data.Data[0].StudioId)
        setDashboard(false)
      }
      else{
        alert("No User Found")
      }
    })
    
    localStorage.setItem("user-info",JSON.stringify(result))
   
    // history.push("/")  
    console.log(login)

    // if(mobileNo == mobileNo){
    //   console.log("data found")
    // }else{
    //   history.push('/')
    // }
  }
  return (
    
    <>
    
    {dashboard?(<>
      {/* <ExamplesNavbar /> */}
      <div
        className="page-header"
        style={{ 
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  {/* <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button> */}
                </div>
                <Form className="register-form">
                  <label>Mobile Number</label>
                  <Input placeholder="Enter Mobile Number" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} type="text" />
                  {/* <label>Password</label>
                  <Input placeholder="Password" type="password" /> */}
                  <Button block className="btn-round" onClick={()=>{login()}} color="danger">
                    Register
                  </Button>
                
                </Form>
                <div className="forgot">
                  {/* <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button> */}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          {/* <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Tim
          </h6> */}
        </div>
      </div>)</>):
      <SectionButtons studioId={StudioId}/>}
    </>
  );
}


export default Logins;
