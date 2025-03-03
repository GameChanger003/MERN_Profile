// client/src/App.js
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import ProfileList from './Components/ProfileList';
// import ProfileForm from './Components/ProfileForm';
// import ProfileDetail from './Components/ProfileDetail';
import MainPage from './Compnt/MainPage';
import { AppBar, Toolbar, Button, Typography, Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './app.css';

function App() {
  const navItems=["home","Eduacation","Skills","Interships","Achievements"]

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };


  const menuItems = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button component="a" href="#home" onClick={() => toggleDrawer(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="#Educational" onClick={() => toggleDrawer(false)}>
          <ListItemText primary="Educational" />
        </ListItem>
        <ListItem button component="a" href="#skills" onClick={() => toggleDrawer(false)}>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component="a" href="#Internships" onClick={() => toggleDrawer(false)}>
          <ListItemText primary="Internships" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    // <Router>
    //     <Routes>
    //       <Route path="/"  Component={ProfileList} />
    //       <Route path="/profile/new" Component={ProfileForm} />
    //       <Route path="/profile/:id" Component={ProfileDetail} />
    //       <Route path="/profile/edit/:id" Component={ProfileForm} />
    //     </Routes>
    // </Router>
    <Router>

    <div>
       <AppBar position="fixed" sx={{ background: 'linear-gradient(45deg, #6a5acd, #2daaa7)' }}>
        <Toolbar>
          {/* Logo or Brand Name */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Donga Navyatha
          </Typography>

          {/* Desktop View (Hidden on Mobile) */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#Educational">Education</Button>
            <Button color="inherit" href="#skills">Skills</Button>
            <Button color="inherit" href="#Internships">Internships</Button>
          </Box>

          {/* Mobile View Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    <MainPage />
    </div>
    </Router>

  );
}

export default App;
