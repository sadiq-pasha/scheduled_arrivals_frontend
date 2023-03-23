// material ui imports
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Box from '@mui/system/Box'
import { styled } from '@mui/material/styles'
import Modal from '@mui/material/Modal'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import BoltIcon from '@mui/icons-material/Bolt'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CircularProgress from '@mui/material/CircularProgress'
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive'

// components
import Footer from '../components/Footer'
import SearchAppBar from '../components/Navbar'

// react and services imports
import getData from '../services/axios'
import { useState, useEffect } from 'react'

const CardContentNoPadding = styled(CardContent)(`
  padding: 5px;
  &:last-child {
    padding-bottom: 5px;
  }
`)

const style = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '65vh',
  width: '70vw',
  bgcolor: 'black',
  border: '2px solid #ffffff',
  borderRadius: 2,
  overflowY: 'scroll',
}

const Home = () => {
  const [flightData, setFlightData] = useState(null)
  const [airframedata, setAirframeData] = useState([])
  const [airframedataTable, setAirframeDataTable] = useState([])
  const [open, setOpen] = useState(false)
  
  const handleOpen = (i) => {
    setAirframeDataTable(airframedata[i])
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getData().then(response => {
      setFlightData(response)
      if (response && !response.error){
        setAirframeData(response.map(each => {
          return each.airframeData ? Object.entries(each.airframeData) : null
        }))
      }
    })
  },[])
  if (!flightData){
    return (
      <div>
        <SearchAppBar/>
        <Grid container display='flex' direction='column' alignItems='center' justifyContent='center' sx={{ 
          height: '80vh',
          width: '80vw',
          m:'auto'
        }}>
          <CircularProgress color='secondary' size='10vh'/>
          <Typography sx={{ color:'#FFFFFF' }} variant='h6' component='h1' m={1}>Fetching Data . . </Typography>
        </Grid>
      </div>
    )
  }
  if (flightData){
    if (flightData.error){
      return (
        <div>
          <SearchAppBar/>
          <Grid container display='flex' direction='column' alignItems='center' justifyContent='center' sx={{ 
            height: '80vh',
            width: '80vw',
            m:'auto'
          }}>
            <AirplanemodeInactiveIcon sx={{height:60, width:60}} color='error'/>
            <Typography sx={{ color:'#FFFFFF' }} variant='h6' component='h1' m={1}>SERVER ERROR</Typography>
          </Grid>
        </div>
      )
    }  else   {
      const cardWidth = Math.max(...flightData.map(flight => flight.photo.width))
      const cardHeight = Math.max(...flightData.map(flight => flight.photo.height))
      return (
        <div className="App">
          <SearchAppBar/>
          <Container maxWidth={false}
            sx={{
              border: 'solid 1px #EBEBD3', 
              width: '95%',
              borderRadius: 2,
              backgroundColor: 'rgba(41,0,41,0.4)',
              marginY: 2,
            }}>
            <Box m={2}>
              <Box display='flex' justifyContent='center' gap={3} marginBottom={2}>
                <Button
                  href={'https://www.liveatc.net/hlisten.php?mount=klax_twr&icao=klax'}
                  target='_blank'
                  rel='noreferrer noopener'
                  variant='contained'
                  size="small" 
                  color='inherit'
                  endIcon={<OpenInNewIcon/>}
                >
                            LAX TOWER
                </Button>
                <Button
                  href={'https://www.liveatc.net/hlisten.php?mount=klax_gnd&icao=klax'}
                  target='_blank'
                  rel='noreferrer noopener'
                  variant='contained'
                  size="small" 
                  color='inherit'
                  endIcon={<OpenInNewIcon/>}
                >
                    LAX GROUND
                </Button>
              </Box>
            </Box>
            <Grid container direction='row' justifyContent='center' rowSpacing={2}>
              {flightData.map((flight, index) => {
                //   const airframedata = flight.airframeData ? Object.entries(flight.airframeData) : []

                return (
                  <Card key={index} sx={{
                    width: `${cardWidth}px`,
                    margin:2,
                    backgroundColor: 'rgba(41,0,41,0.4)',
                    border: 'solid 1px #EBEBD3', 
                    borderRadius: 2}}>
                    <CardActionArea 
                      href={flight.photo.link} 
                      target= '_blank' rel='noreferrer noopener' 
                      sx={
                        { 
                          backgroundImage: `url(${flight.photo.photo})`,
                          backgroundSize: 'cover',
                        }
                      }>
                      <CardMedia
                        sx={
                          {
                            objectFit:'scale-down',
                            backdropFilter: 'blur(8px)'
                          }
                        }
                        component='img'
                        image={flight.photo.photo}
                        alt={flight.registration}
                        height= {`${cardHeight}px`}
                      />
                    </CardActionArea>
                    <Typography sx={{ color:'#FFFFFF', backgroundColor:'black'}} paddingLeft='5px' variant="caption">
                    photo credits: {flight.photo.credit}
                    </Typography>
                    <CardContentNoPadding>
                      <Typography sx={{ color:'#FFFFFF' }} variant="h4" component="h1">
                        {flight.ident}<br/>
                        <Button
                          href={`https://flightaware.com/live/flight/${flight.ident}`}
                          target='_blank'
                          rel='noreferrer noopener'
                          variant='contained'
                          size="small" 
                          color="success"
                          endIcon={<OpenInNewIcon/>}
                        >
                            track {flight.registration} on flightaware
                        </Button>
                      </Typography>
                      <Box marginTop={1}>
                        <Typography sx={{ color:'#FFFFFF' }} variant="h5" component="h1">
                          {flight.origin_airport}
                        </Typography>
                        <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                          {flight.origin_city}
                        </Typography>
                      </Box>
                      <Box marginTop={1}>
                        <Typography sx={{ color:'#FFFFFF' }} variant="h6" component="h1">
                          {flight.status}
                        </Typography>
                        <Box m={1}>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                            Scheduled departure:<br/>
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body2" component="h1">
                            {new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Los_Angeles' }).format(new Date(flight.scheduled_off))} PST
                          </Typography>
                        </Box>
                        <Box m={1}>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                            Scheduled arrival:<br/>
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body2" component="h1">
                            {new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Los_Angeles' }).format(new Date(flight.scheduled_on))} PST
                          </Typography>
                        </Box>
                        <Box m={1}>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                            Enroute arrival:<br/>
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body2" component="h1">
                            {new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Los_Angeles' }).format(new Date(flight.estimated_on))} PST
                          </Typography>
                        </Box>
                      </Box>
                      <Box m={1}>
                        <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                        Flight distance: {flight.route_distance} miles
                        </Typography>
                        <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                        Flight time: {Math.trunc(((flight.filed_ete / 3600)*10))/10} hours
                        </Typography>
                        <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                        Flight altitude: {flight.filed_altitude}00 feet
                        </Typography>
                      </Box>
                      {
                        flight.airframeData ?
                          <Box textAlign='right'>    
                            <Button
                              variant='contained'
                              onClick={() => handleOpen(index)}
                              size="small" 
                              color="inherit"
                              endIcon={<BoltIcon />}
                              sx={{padding:1,
                                m: 1,
                              }}>
                            Airframe Data
                            </Button>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Table aria-label="simple table">
                                  <TableBody>
                                    {airframedataTable.map((row, index) => (
                                      <TableRow
                                        key={index}
                                      >
                                        <TableCell sx={{borderBottom: 'none', color: '#FFFFFF', width:'50%'}} component="th" scope="row">
                                          {row[0]}
                                        </TableCell>
                                        <TableCell sx={{borderBottom: 'none', color: '#FFFFFF'}}>{row[1]}</TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </Box>
                            </Modal>
                          </Box>
                          :
                          <Box textAlign='right'>
                            <Button
                              variant='outlined'
                              disabled
                              size="small" 
                              color="inherit"
                              endIcon={<BoltIcon />}
                              sx={{padding:1,
                                backgroundColor: '#808080',
                                m: 1,
                              }}>
                            Airframe Data
                            </Button>
                          </Box>
                      }
                    </CardContentNoPadding>
                  </Card>
                )
              })
              }
            </Grid>
          </Container>
          <Footer/>
        </div>
      )
    } 
  }
}
export default Home