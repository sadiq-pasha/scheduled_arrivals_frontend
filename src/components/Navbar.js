// material UI imports
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Flight from '@mui/icons-material/Flight'
import Typography from '@mui/material/Typography'

// react router imports
import { Link } from 'react-router-dom'

// navbar component
export default function ButtonAppBar() {
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
          <Link to="/about" style={{ textDecoration: 'none'}}>
            <Button sx={{ 
              mr: 2,
              backgroundColor: '#17BEBB',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#D90368',
              }    
            }}>
                ABOUT
            </Button>
          </Link>
          <Link to="/laxinfo" style={{ textDecoration: 'none'}}>
            <Button sx={{ 
              mr: 2,
              backgroundColor: '#17BEBB',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#D90368',
              }    
            }}>
                KLAX
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}