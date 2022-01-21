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
import axios from "axios";

import Switches from "./Switch";
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
import { data } from "jquery";
import { borderRadius } from "@mui/system";
//import ShowPhoto from "./ShowPhoto"
const ShowPhoto = (props) => {

    const [users, setUsers] = useState([]);
  //const [album,setAlbum] = useState([]);
  const [photo,setPhoto] = useState([])
    const [allPhoto, setAllPhoto] = useState([])
 

  const getAlbum = async () => {
    await fetch('http://pictick.itfuturz.com/api/AppAPI/GetAlbumPhotoList?AlbumId='+props.albumId).then(res=>res.json()).then(data=>{
        console.log(data.Data[0].PhotoList)    
    setPhoto(data.Data[0].PhotoList)
    setAllPhoto(data.Data[0].PhotoList)});
    
  }

  

  useEffect(() => {
    console.log(props);
    getAlbum();
  },[]);



  const filterItem = (select) => {
      if(select==true){
        const updatedItems = allPhoto.filter((curE) => {
            return curE.IsSelected == true
        });
        setPhoto(updatedItems);
      }
      else{
        const updatedItems = allPhoto.filter((curE) => {
            return curE.IsSelected == false
        });
        setPhoto(updatedItems);
      }
  }

  
  return (
    <>
    <div className="menu-tabs container" style={{marginTop:"100px" }}>
        <div className="nemu-tab d-flex justify-content-around">
            <button className="btn btn-warning" onClick={() => filterItem(true)} style={{borderRadius: '10px'}}>Seleted Photo</button>
            <button className="btn btn-warning" onClick={() => filterItem(false)} style={{borderRadius: '10px'}}>UnSeleted Photo</button>
            <button className="btn btn-warning" onClick={() => setPhoto(allPhoto)} style={{borderRadius: '10px'}}>all Photo</button>
        </div>

    </div>
    
      
        
      <Container>
            <div className="title">
              <center><h3>Images</h3></center>
            </div>
            <ul>
         {photo.length>0?photo.map((curElem) => {
           
             return(
                <li>
                <input type="checkbox" id="myCheckbox1" />
                <label for="myCheckbox1">
                <img
                  alt="..."
                  src={'http://pictick.itfuturz.com/'+curElem.Photo}
                  height={"500px"} width={"500px"}
                />
                </label>
  </li>
                )
                
              })
            :""}    
              </ul>
          </Container>
    </>
  );
 }

export default ShowPhoto;