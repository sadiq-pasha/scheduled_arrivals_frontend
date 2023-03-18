// material UI imports
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Flight from '@mui/icons-material/Flight'

// react router imports
import { Link } from 'react-router-dom'

// navbar component
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#290029' }}>
        <Toolbar>
          <Link to='/'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ 
                mr: 2,
                color: '#17BEBB',
                '&:hover': { color: '#D90368'}    
              }}
            >
              <Flight />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#EBEBD3' }}>
            Planespotting at LAX
          </Typography>
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