import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => {

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Button key="home" sx={{ my: 2, color: 'white', display: 'block' }}> Home </Button>
            </Link>
            <Link to="/second">
              <Button key="second" sx={{ my: 2, color: 'white', display: 'block' }}>Second</Button>
            </Link>
            <Link to="/increment">
              <Button key="increment" sx={{ my: 2, color: 'white', display: 'block' }}>Increment</Button>
            </Link>
            <Link to="/decrement">
              <Button key="decrement" sx={{ my: 2, color: 'white', display: 'block' }}>Decrement</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <br></br>
    <Outlet />
    </>
  );
};
export default ResponsiveAppBar;
