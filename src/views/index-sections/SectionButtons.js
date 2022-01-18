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
import React,{useState,useEffect} from "react";
// plugin that creates slider
import Slider from "nouislider";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CustomInput,
} from "reactstrap";
const SectionButtons = (props) => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await fetch('http://pictick.itfuturz.com/api/AppAPI/GetCategoryList?studioId='+props.studioId).then(res=>res.json()).then(data=>{setUsers(data.Data)});
  }

  useEffect(() => {
    getUsers();
  },[]);
  
  return (
    <>
<IndexHeader />
<IndexNavbar />
    
      <div className="section section-buttons">
        
      <Container>
            <div className="title">
              <h3>Images</h3>
            </div>
         {users.length>0?users.map((curElem) => {
           
             return(
             
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={curElem.Image}
                  height={"300"} width={"300"}
                style={{marginLeft : 30,marginTop: 30}}
                />
               
                )
                
              })
            :""}    
              
          </Container>

        
      </div>
    </>
  );
 }

export default SectionButtons