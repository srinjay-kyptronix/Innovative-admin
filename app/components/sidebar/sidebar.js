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

 
    </div>
  )
}

export default Sidebar