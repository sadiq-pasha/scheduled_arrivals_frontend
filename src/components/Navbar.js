// material UI imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Flight from '@mui/icons-material/Flight'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
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
                overflowX:'hidden'
              }
            }}
          >
            <Box
              sx={{ width:200}}
              role="presentation"
              onClick={() => setNavbarMenuOpen(false)}
              onKeyDown={() => setNavbarMenuOpen(false)}
              textAlign='left'>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" component="div" m='15px' sx={{color:'#FFFFFF'}}>
                  Menu
                </Typography>
                <IconButton
                  onClick={() => setNavbarMenuOpen(false)}
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
                  <CloseIcon sx={{height:30, width:30}} />
                </IconButton>
              </Box>
              <Divider />
              <Link to="/about" style={{ textDecoration: 'none'}}>
                <Typography m='15px' sx={{ 
                  width:200,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                About
                </Typography>
              </Link>
              <Divider />
              <Link to="/laxinfo" style={{ textDecoration: 'none'}}>
                <Typography m='15px' sx={{ 
                  width:200,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                Airport info
                </Typography>
              </Link>
              <Divider />
              <Typography variant="h6" component="div" m='15px' sx={{color:'#FFFFFF'}}>
                ATC Comms
              </Typography>
              <Divider />
              <a href='https://www.liveatc.net/hlisten.php?mount=klax_twr&icao=klax' style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                <Typography m='15px' sx={{ 
                  width:200,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                  LAX Tower
                </Typography>
              </a>
              <Divider />
              <a href='https://www.liveatc.net/hlisten.php?mount=klax_gnd&icao=klax' style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                <Typography m='15px' sx={{ 
                  width:200,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                  LAX Ground
                </Typography>
              </a>
              <Divider />
              <Typography variant="h6" component="div" m='15px' sx={{color:'#FFFFFF'}}>
                More
              </Typography>
              <Divider />
              <a href='https://github.com/sadiq-pasha/scheduled_arrivals_server' style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                <Typography m='15px' sx={{ 
                  width:200,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                  Github README
                </Typography>
              </a>
              <Divider />
              <a href='https://www.buymeacoffee.com/sadiqpasha' style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                <Typography m='15px' sx={{ 
                  width:200,
                  color: '#17BEBB',
                  '&:hover': {
                    color: '#D90368',
                  }    
                }}>
                  Support me!
                </Typography>
              </a>
              <Divider />
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  )
}