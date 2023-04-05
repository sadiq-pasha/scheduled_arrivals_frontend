// material UI imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Flight from '@mui/icons-material/Flight'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import { useState } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// navbar component
export default function ButtonAppBar() {

  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#3E193E' }}>
        <Toolbar disableGutters>
          <Box display='flex' flexGrow={1} alignItems='center'>
            <Link to='/'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ 
                  m: 1,
                  color: '#17BEBB',
                  '&:hover': { color: '#D90368'}    
                }}
              >
                <Flight sx={{height:30, width:30}} />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{color:'#FFFFFF'}}>
            Enroute to LAX
            </Typography>
          </Box>
          <IconButton
            onClick={() => setNavbarMenuOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              m: 1,
              color: '#17BEBB',
              '&:hover': { color: '#D90368'}    
            }}
          >
            <MenuIcon sx={{height:30, width:30}} />
          </IconButton>
          <Drawer
            anchor='right'
            open={navbarMenuOpen}
            onClose={() => setNavbarMenuOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: '#3E193E',
              }
            }}
          >
            <Box
              sx={{ width:200, overflowX:'hidden' }}
              role="presentation"
              onClick={() => setNavbarMenuOpen(false)}
              onKeyDown={() => setNavbarMenuOpen(false)}
              textAlign='left'            >
              <Link to="/about" style={{ textDecoration: 'none'}}>
                <Typography variant='text' sx={{ 
                  width:200,
                  mr: 2,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                ABOUT
                </Typography>
              </Link>
              <Divider />
              <Link to="/laxinfo" style={{ textDecoration: 'none'}}>
                <Button variant='text' sx={{ 
                  mr: 2,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                KLAX
                </Button>
              </Link>
              <Divider />
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  )
}