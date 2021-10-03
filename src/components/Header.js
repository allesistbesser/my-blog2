import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext } from "react";
import { useHistory } from "react-router";
import { BlogContext } from "../context/BlogContext"
import { signOut , addchat} from '../utils/Functions';


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { islogin, setislogin ,setloginInfo} = useContext(BlogContext);
  const history = useHistory();

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const handleSignOut = () => {
    setislogin(false);
    handleClose();
    setloginInfo({email:"",password:""});
    signOut();
    history.push("/");
    }

  const handleLogin = ()=>{
    handleClose();
    history.push("/login")
  }
  const handleNewBlog = ()=>{
    handleClose();
    history.push("/newblog")
  }

  
  return (

    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} > 
            <img style={{ width: 130 , borderRadius: 16}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nkauTm0CErv6pFsm8GFnDVnsmI2FK1geOfFBnckNGT2BQzrdI3kWJRr44whf8oR2VTQ&usqp=CAU" alt="Clarusway" onClick={() => history.push("/")}/>
          </Box>
          
          <Typography variant="h4" component="div" sx={{ display: { xs:"none" , md:"inline-block" } , flexGrow: 1, cursor:"pointer", fontFamily:"girassol" }} onClick={() => history.push("/")}>
          <sup>_______</sup>{" <People Blog> "}<sup>_______</sup>
          </Typography>
         
          
            <div>
               
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color={islogin ? "inherit": "warning"}
              >
                <AccountCircle />
              </IconButton>
             
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {islogin ? <MenuItem onClick={handleNewBlog}>NewBlog</MenuItem>: null}
                {islogin ? <MenuItem onClick={handleSignOut}>SignOut</MenuItem>: null}
                {!islogin ? <MenuItem onClick={handleLogin}>Login</MenuItem>: null}
               {!islogin ? < MenuItem onClick={() => {history.push("/register"); handleClose() }}>Register</MenuItem>: null}

            </Menu>
            
            </div>
          
      </Toolbar>
    </AppBar>
    </Box >
  );
}

