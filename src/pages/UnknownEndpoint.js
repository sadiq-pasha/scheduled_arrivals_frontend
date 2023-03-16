import Typography from '@mui/material/Typography'
import SearchAppBar from '../components/Navbar'
import Grid from '@mui/material/Grid'
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive'

const UnknownEndpoint = () => {
  return (
    <div>
      <SearchAppBar/>
      <Grid container display='flex' direction='column' alignItems='center' justifyContent='center' sx={{ 
        height: '80vh',
        width: '80vw',
        m:'auto'
      }}>
        <AirplanemodeInactiveIcon sx={{height:60, width:60}} color='error'/>
        <Typography sx={{ color:'#FFFFFF' }} variant='h6' component='h1' m={1}>Page Not Found!</Typography>
      </Grid>
    </div>
  )

}

export default UnknownEndpoint