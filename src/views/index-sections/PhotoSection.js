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
import { Link } from "react-router-dom";
import {  Card, Form} from "reactstrap";
import ShowPhoto from "./ShowPhoto"
const PhotoSection = (props) => {
  const [isPhotos,setPhotos]=useState(true);
  const [albumId,setAlbumId]=useState("") 
    const [users, setUsers] = useState([]);
  //const [album,setAlbum] = useState([]);
  const [photo,setPhoto] = useState([])

 

  const getAlbum = async () => {
    await fetch('http://pictick.itfuturz.com/api/AppAPI/GetCustomerAlbumList?galleryId='+props.albumId).then(res=>res.json()).then(data=>{
        setPhoto(data.Data)});
  }

  


  useEffect(() => {
    console.log(props);
    getAlbum();
  },[]);

  

  // if (!Array.isArray(curElems) || curElems.length <= 0){
  //   return null
  // }
  
  return (
    <>
    
     {isPhotos?
      <div className="kevil"> 

        
          <Container>
           
              <center><h3>Album</h3></center>
              <hr/>
            
         {photo.length>0?photo.map((cur) => {
           
             return(
             
    <div className="hoverable" onClick={()=>{setAlbumId(cur.Id);setPhotos(false)}} style={{
      height: "480px",
      width: "500px",
      backgroundColor: "#ffff",
      borderRadius: 10,
      marginLeft: "100px"
      
    }}>
    <center><img src={'http://pictick.itfuturz.com/'+cur.Photo} height={"300px"} width={"350px"} style={{marginTop:"30px" ,marginBottom:"30px" , marginRight: "10px",marginLeft:'10px',borderRadius: "10px"}}/></center>
    <center><table ><td style={{marginRight:"30px",marginLeft:"30px"}}>
    <Card style={{height:"90px", width:"70px",borderRadius: 10,marginRight:"100px"}}>
     
    <img src={require("assets/img/faces/icons8-medium-icons-96.png").default} height={"50px"} width={"50px"} style={{marginRight:"10px",marginLeft:"10px",marginTop:"10px"}}></img>
    <h4 style={{marginBottom:"10px" , marginRight: "10px",marginLeft:'15px'}}>{cur.NoOfPhoto}</h4></Card>
    </td><td style={{marginRight:"30px",marginLeft:"30px"}}>
    <Card style={{height:"90px", width:"70px",borderRadius: 10}}>
    <img src={require("assets/img/faces/icons8-ok-96.png").default} height={"50px"} width={"50px"} style={{marginRight:"10px",marginLeft:"10px",marginTop:"10px"}}></img>
     <center><h3 style={{marginBottom:"10px"}}>{cur.SelectedPhotoCount}</h3></center></Card>
    </td></table></center>
</div>  
                )                
              })
            :""}    
              
          </Container>
       
       
          </div>:<ShowPhoto albumId={albumId}/>}
    </>
  );
 }

export default PhotoSection;