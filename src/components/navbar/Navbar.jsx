import React, { useContext } from 'react';
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

  const { toggle ,darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration:"nonet5"}}>
          <span>LiveA</span>
        </Link>
          <HomeOutlinedIcon/>
          {darkMode? <WbSunnyOutlinedIcon onClick={toggle} /> :
           <DarkModeOutlinedIcon onClick={toggle}/>}
          <GridViewOutlinedIcon/>

          <div className='search'>
            <SearchOutlinedIcon/>
            <input type="text" placeholder='search...' />
          </div>
        
      </div>
      <div className='right'>
        <Person2OutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className='user'>
          <img src={ currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar
