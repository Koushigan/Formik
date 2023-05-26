import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from 'react-router-dom'

function Sidebar() {
  return <>
     <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
        <hr className="sidebar-divider my-0"/>

        <Link to='/dashboard'>
            <li className="nav-item active">
                <div className="nav-link">
                    <i className="fas fa-fw fa-file-alt"></i>
                    <span>Report</span></div>
            </li>
        </Link>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            CRUD
        </div>
       <Link to='/add-user'>
            <li className="nav-item">
                    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <PersonAddIcon/> &nbsp;
                        <span>Edit Student</span>
                    </div>
            </li>
       </Link>


        <hr className="sidebar-divider"/>

</ul>
  </>
}

export default Sidebar