import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function SideBar() {
  const[activeTab,setActiveTab] = useState(0);
  const[isToggleSubmenu,setIsToggleSubmenu] = useState(false);
  const[isToggleSideBar, setIsToggleSideBar]= useState(false)
  const isOpenSubmenu=(index)=>
  {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu)
  }
  return (
    <div className={`sidebar ${isToggleSideBar === true ? 'collapse':'collapsed'}`}>
      <div className='main_page'>
        <p>MAIN PAGES</p>
      </div>
      
      <ul>
        <li>
          <Button className={`w-100 ${activeTab===0 ? 'active':''}`} onClick={()=>isOpenSubmenu(0)}>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          <div className={`submenuWrapper ${activeTab===0 && isToggleSubmenu===true? 'colapse':'colapsed'}`}>
          <ul className='sub-menu'>
            <li><Link to="userdetail/user">Product List</Link></li>
            <li><Link to="productview/product">Product View</Link></li>
            <li><Link to="productadd/product">Product Items</Link></li>
            <li><Link to="productitinerary/product">Product Itinerary</Link></li>
            <li><Link to="productincexc/product">Product Inclusion Exclusion </Link></li>
          </ul>
          </div>
        </li>
        <li>
          <Button className={`w-100 ${activeTab===1 ? 'active':''}`} onClick={()=>isOpenSubmenu(1)}>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true? 'colapse':'colapsed'}`}>
          <ul className='sub-menu'>
            <li><Link to="#">Product List</Link></li>
            <li><Link to="#">Product View</Link></li>
            <li><Link to="#">Product Items</Link></li>
          </ul>
          </div>
        </li>
        <li>
          <Button className={`w-100 ${activeTab===2 ? 'active':''}`} onClick={()=>isOpenSubmenu(2)}>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          <div className={`submenuWrapper ${activeTab===2 && isToggleSubmenu===true? 'colapse':'colapsed'}`}>
          <ul className='sub-menu'>
            <li><Link to="#">Product List</Link></li>
            <li><Link to="#">Product View</Link></li>
            <li><Link to="#">Product Items</Link></li>
          </ul>
          </div>
        </li>
        <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>
          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>
          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>
          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
            </li>
            <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>

          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>
          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>
          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>
          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          </li>
          <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
            <span className='arrow'><IoIosArrowForward />
          </span>
          </Button>
          
        </li>
      </ul>
    </div>
  )
}
