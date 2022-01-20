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
            <div className="title">
              <h3>Album</h3>
            </div>
         {photo.length>0?photo.map((cur) => {
           
             return(
             
    <div className="hoverable" onClick={()=>{setAlbumId(cur.Id);setPhotos(false)}} style={{
      height: "400px",
      width: "500px",
      backgroundColor: "#ffff",
      borderRadius: 10,
      marginLeft: "100px"
      
    }}>
    <center><img src={'http://pictick.itfuturz.com/'+cur.Photo} height={"300px"} width={"350px"} style={{marginTop:"10px" ,marginBottom:"10px" , marginRight: "10px",marginLeft:'10px'}}/></center>
    
    <h3 style={{marginBottom:"10px" , marginRight: "10px",marginLeft:'10px'}}>{cur.NoOfPhoto}</h3><h3 style={{marginBottom:"10px" , marginRight: "10px",marginLeft:'10px'}}>{cur.SelectedPhotoCount}</h3>

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