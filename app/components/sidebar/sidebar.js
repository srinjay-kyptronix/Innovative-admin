"use client"
import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



const Sidebar = (props)=>{
  const [activeOption, setActiveOption] = useState(props.activeOption);


  return(
    <div className='col-md-2 col-12 bg-dark py-4' style={{minHeight:"100vh", zIndex:"100"}}>
      <a style={{textDecoration: "none"}} href="/pages/dashboard">
        <div className="row fw-bold text-white" style={activeOption=='dashboard'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>Dashboard</p>
        </div>
      </a>

      <a style={{textDecoration: "none"}} href="/pages/user-management">
        <div className="row fw-bold text-white" style={activeOption=='user-management'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>User Management</p>
        </div>
      </a>

      <a style={{textDecoration: "none"}} href="/pages/mcq-template-editor">
        <div className="row fw-bold text-white" style={activeOption=='mcq-template-editor'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>MCQ Template Editor</p>
        </div>
      </a>

      <a style={{textDecoration: "none"}} href="/pages/file-upload-temp-editor">
        <div className="row fw-bold text-white" style={activeOption=='file-upload-temp-editor'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>File Upload Temp Editor</p>
        </div>
      </a>

      <a style={{textDecoration: "none"}} href="/pages/invoice-management">
        <div className="row fw-bold text-white" style={activeOption=='invoice-management'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>Invoice Management</p>
        </div>
      </a>


      <a style={{textDecoration: "none"}} href="/pages/purchase-order-management">
        <div className="row fw-bold text-white" style={activeOption=='purchase-order-management'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>Purchase Order Management</p>
        </div>
      </a>


      <a style={{textDecoration: "none"}} href="/pages/document-center">
        <div className="row fw-bold text-white" style={activeOption=='document-center'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>Document Center</p>
        </div>
      </a>


      <a style={{textDecoration: "none"}} href="/pages/document-center">
        <div className="row fw-bold text-white" style={activeOption=='document-center'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>Document Center</p>
        </div>
      </a>

      <a style={{textDecoration: "none"}} href="/pages/system-setting">
        <div className="row fw-bold text-white" style={activeOption=='system-setting'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>System Setting</p>
        </div>
      </a>


      <a style={{textDecoration: "none"}} href="/pages/logout">
        <div className="row fw-bold text-white" style={activeOption=='logout'?{backgroundColor: '#575655'}:{backgroundColor:"transparent"}}>
          <p className='px-3 pt-2 ms-4 me-2 '>Logout</p>
        </div>
      </a>
    </div>
  )
}

export default Sidebar