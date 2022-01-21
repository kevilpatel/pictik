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
import footers from "components/Footers/DemoFooter"
import { style } from "@mui/system";


const Logins=()=>{
  const [mobileNo,setMobileNo] = useState("")
  const [dashboard,setDashboard]=useState(true);
  const [StudioId,setStudioId]=useState("")
  const [customerId,setCustomerId] = useState("")
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
        setCustomerId(data.Data[0].Id)
      
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
        <Container >
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto" style={{Color:"red"}}>
                <h3 className="title mx-auto" style={{color:"black",fontStyle:"booled"}}>Welcome</h3>
                <div className="social-line text-center">
                  
                </div>
                <Form className="register-form">
                  <br /><br />
                  <text style={{color:"black"}}>Mobile Number</text>
                  <input type="text" className="form-control-lg" style={{width:"100%" ,border:'12px',border: '1px solid black !important'}}  value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} /><br />
                  <br />
                  
                 
                  <Button block className="btn-round" onClick={()=>{login()}} color="danger">
                    Register
                  </Button>
                
                </Form>
                <div className="forgot">
                 
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
      </div></>):
      <SectionButtons studioId={StudioId}  customerId={customerId}/>}
    </>
  );
}


export default Logins;
