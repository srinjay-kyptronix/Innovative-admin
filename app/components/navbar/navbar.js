"use client";
import React from 'react';
import useState from 'react';
import '@/app/components/navbar/navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/sidebar';
import logo from "../../../assets/logo.png"
import Image from 'next/image';


const Nav = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  

  const activeMenu=()=>{
    setOpenMenu(true)
  }

  const closeMenu=()=>{
    setOpenMenu(false)
  }

  return (
    <div>
      <nav id='navLargeScreenBar' className="navbar navbar-expand-lg bg-black headernavbar" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><Image alt="logo" src={logo} width={65} height={65}/></a>
          <AccountCircleIcon/>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
          </div> */}
        </div>
      </nav>

      <nav id='navMobileBar' className="navbar navbar-expand-lg headernavbar bg-primary" >
        <div className="container-fluid">
          <MenuIcon onClick={()=>setOpenMenu(true)}/>
          <a className="navbar-brand" href="#"><Image alt="logo" src={logo} width={65} height={65} /></a>
          <AccountCircleIcon/>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
          </div> */}
        </div>
      </nav>


      {openMenu==true && (
         <div className='menuContainer'>
         <div className="menuContainerLeft">
           <div className="row">
             <Sidebar/>
           </div>
         </div>
         <div className="menuContainerRight" onClick={()=>setOpenMenu(false)}>

         </div>
     </div>
      )}
    </div>
  )
}

export default Nav