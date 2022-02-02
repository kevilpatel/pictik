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
import "../index-sections/slider.css"

// plugin that creates slider
import Slider from "nouislider";
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import IndexHeader from "components/Headers/IndexHeader.js";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import photos from './PhotoSection'
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
import Footers from "components/Footers/DemoFooter"
import { Link } from "react-router-dom";
import {  Card, Form} from "reactstrap";
import PhotoSection from "./PhotoSection";

const SectionButtons = (props) => {
  const [isPhotos,setPhotos]=useState(true);
  const [albumId,setAlbumId]=useState("") 
  const [users, setUsers] = useState([]);
  const [album,setAlbum] = useState([]);
  const [current, setCurrent] = useState(0);
  const history = useHistory();
  // const history=useHistory();
  const nextSlide = () => {
    console.log("nextSlide")
    setCurrent( current === (users.length -1) ? 0 : (current + 1))
  }

  const prevSlide = () => {
    console.log("prevSlide")
    setCurrent (current === 0 ? (users.length -1) : (current - 1))
  }
  const getUsers = async () => {
    await fetch('http://pictick.itfuturz.com/api/AppAPI/GetCategoryList?studioId='+props.studioId).then(res=>res.json()).then(data=>{setUsers(data.Data)});
  }

  const getAlbum = async () => {
    await fetch('http://pictick.itfuturz.com/api/AppAPI/GetCustomerGalleryList?customerId='+props.customerId).then(res=>res.json()).then(data=>{setAlbum(data.Data)});
  }

  useEffect(() => {
    getUsers();
    getAlbum();
    
  console.log(history);
  },[]);

  

  // if (!Array.isArray(curElems) || curElems.length <= 0){
  //   return null
  // }
  
  return (
    < >


    {isPhotos?
    <div className="kevil"> 
{/* <IndexHeader />
<IndexNavbar />
     */}
     
        
      <Container >
             <section className="slider">
               <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
               <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
               {users.length>0?users.map((curElem,index) => {

               return(
               <div className={index === current ? 'slide active' : 'slide'} key={index}>
                 {index === current && (<img
                  alt="travel image"
                  className="image"
                  src={curElem.Image}
                  //height={"300"} width={"300"}
               // style={{marginLeft : 30,marginTop: 30}}
                />)} 
                </div> 
               )
              })
              :""}
               </section>
                  
          </Container>
          <Container>
            <div className="title">
              <h3>Album</h3>
            </div>
         {album.length>0?album.map((cur) => {
           
             return(
             
                // <img
                //   alt="..."
                //   className="img-rounded img-responsive"
                //   src={curElem.Image}
                //   height={"300"} width={"300"}
                // style={{marginLeft : 30,marginTop: 30}}

    <div className="hoverable" onClick={()=>{setAlbumId(cur.Id);setPhotos(false)}} style={{
      height: "170px",
      width: "300px",
      backgroundColor: "#ffff",
      borderRadius: 10,
      marginLeft: "100px"
      
    }}>
    <center><img src={require("assets/img/faces/logo.png").default} height={"100"} width={"200"} style={{ marginRight: "10px",marginLeft:'10px'}}/></center>
    
    <center><h3 style={{marginBottom:"10px" , marginRight: "10px",marginLeft:'10px'}}>{cur.Title}</h3></center>

</div>
                )        
              })
            :""}    
              
          </Container>
       
       
          </div>:<PhotoSection albumId={albumId}/>}

          {/* <div className="footer" > */}
          
          
        
          {/* <center><div className="credits ml-auto">
          <center><img src={require("assets/img/faces/logo.png").default} height={"100"} width={"200"} style={{marginTop:"10px",marginBottom:"10px",marginRight: "10px",marginLeft:'10px'}}/></center> */}
            {/* <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span> */}
          {/* </div></center> */}
       
    {/* </div> */}
  
    </>
    
  );
  
 }

export default SectionButtons