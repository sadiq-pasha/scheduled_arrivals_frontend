// material ui imports
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/system/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'

// icons import
import BoltIcon from '@mui/icons-material/Bolt'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive'
import CircularProgress from '@mui/material/CircularProgress'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import OpacityIcon from '@mui/icons-material/Opacity'
import AirIcon from '@mui/icons-material/Air'
import ExploreIcon from '@mui/icons-material/Explore'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import WbTwilightIcon from '@mui/icons-material/WbTwilight'
import ErrorIcon from '@mui/icons-material/Error'

// components
import Footer from '../components/Footer'
import SearchAppBar from '../components/Navbar'
import MetarDecoder from '../components/DecodedMetar'

// react and services imports
import { useState, useEffect } from 'react'
import axios from 'axios'

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
  const [weatherdata, setWeatherData] = useState(null)
  const [airframedataTable, setAirframeDataTable] = useState([])
  const [open, setOpen] = useState(false)
  const [isCelsius, setIsCelsius] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  
  const handleOpen = (i) => {
    setAirframeDataTable(airframedata[i])
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const handleSwitchChange = (event) => {
    event.stopPropagation()
    setIsCelsius(!isCelsius)
  }

  const handleDecodeClick = () => {
    setIsDisabled(true)
  }

  useEffect(() => {
    const getData = () => {
      // return null when the server throws an error because the error handling is handled by the useEffect function.
      // when the useEffect sees 'null' it sets the flightdata to error, which then throws the 'SERVER ERROR' message.
      return axios.get('/data')
        .then(response => 
        {
          return response.data      
        })
        .catch(() => 
        {
          return null
        })
    }
      
    getData()
      .then(response => {
        if (response){
          setFlightData(response.data)
          setWeatherData(response.weather)
          setAirframeData(response.data.map(each => {
            return each.airframeData ? Object.entries(each.airframeData) : null
          }))
        } else {
          setFlightData('error')
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
    if (flightData === 'error'){
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
          <Container maxWidth={false} disableGutters
            sx={{
              border: 'solid 1px #EBEBD3', 
              width: '95%',
              borderRadius: 2,
              backgroundColor: 'rgba(41,0,41,0.4)',
              marginY: 2,
            }}>
            <Typography sx={{ color:'#FFFFFF'}} m={2} variant="h4" textAlign='center'>
                    Arrivals
            </Typography>
            <Accordion square disableGutters defaultExpanded sx={{marginTop: 2}}>
              <AccordionSummary
                expandIcon={<ExpandCircleDownIcon sx={{ 
                  color: '#17BEBB',
                  height:30, 
                  width:30
                }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor:'#3E193E'
                }}
              >
                <Typography sx={{ color:'#FFFFFF'}} variant="h6">
                Weather Conditions
                </Typography>
              </AccordionSummary>
              {(Object.keys(weatherdata).length > 3) ? 
                <AccordionDetails sx={{
                  backgroundColor: 'rgba(41,0,41,1)',
                }}>
                  <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' flexGrow={1}>
                      <img src={weatherdata.weatherIcon} alt="" />
                      <Typography sx={{ color:'#FFFFFF'}} variant="h6" textAlign='center'>
                        {weatherdata.weatherDesc}
                      </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                      <Typography sx={{ color:'#FFFFFF'}} variant="h6" textAlign='center'>
                        °C
                      </Typography>
                      <FormControlLabel onClick={handleSwitchChange}
                        control={<Switch checked={!isCelsius} color='primary' sx={{
                          '&.MuiSwitch-root .MuiSwitch-switchBase': {
                            color: '#17BEBB'
                          },
                        
                          '&.MuiSwitch-root .Mui-checked': {
                            color: '#17BEBB'
                          },

                          '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                            backgroundColor: '#17BEBB'
                          }
                          
                        }}/>}
                        sx={{color: '#17BEBB', m:'0px'}}
                      />
                      <Typography sx={{ color:'#FFFFFF'}} variant="h6" textAlign='center'>
                        °F
                      </Typography>
                    </Box>
                  </Box>
                  <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(120px, 1fr))' gap={5} m={2}>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                      <ThermostatIcon sx={{ 
                        color: '#17BEBB',
                        height:30, 
                        width:30
                      }} />
                      <Typography sx={{ color:'#FFFFFF'}} variant="body1" textAlign='center'>
                          Temperature <br/>
                        {isCelsius ? weatherdata.tempCelsius : weatherdata.tempFahrenheit}
                      </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                      <OpacityIcon sx={{ 
                        color: '#17BEBB',
                        height:30, 
                        width:30
                      }} />
                      <Typography sx={{ color:'#FFFFFF'}} variant="body1" textAlign='center'>
                    Humidity<br/>
                        {weatherdata.weatherHumidity}
                      </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                      <AirIcon sx={{ 
                        color: '#17BEBB',
                        height:30, 
                        width:30
                      }} />
                      <Typography sx={{ color:'#FFFFFF'}} variant="body1" textAlign='center'>
                    Wind Speed<br/>
                        {isCelsius ? weatherdata.windspeedMetric : weatherdata.windspeedImperial}
                      </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                      <ExploreIcon sx={{ 
                        color: '#17BEBB',
                        height:30, 
                        width:30
                      }} />
                      <Typography sx={{ color:'#FFFFFF'}} variant="body1" textAlign='center'>
                    Wind Direction<br/>
                        {weatherdata.windDirection}
                      </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                      <WbSunnyIcon sx={{ 
                        color: '#17BEBB',
                        height:30, 
                        width:30
                      }} />
                      <Typography sx={{ color:'#FFFFFF'}} variant="body1" textAlign='center'>
                    Sunrise<br/>
                        {weatherdata.sunriseTime}
                      </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                      <WbTwilightIcon sx={{ 
                        color: '#17BEBB',
                        height:30, 
                        width:30
                      }} />
                      <Typography sx={{ color:'#FFFFFF'}} variant="body1" textAlign='center'>
                    Sunset <br/>
                        {weatherdata.sunsetTime}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionDetails>
                :
                <AccordionDetails sx={{
                  backgroundColor: 'rgba(41,0,41,1)',
                }}>
                  <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' flexGrow={1}>
                    <ErrorIcon sx={{ 
                      color: 'red',
                      height:40, 
                      width:40
                    }}/>
                    <Typography sx={{ color:'#FFFFFF'}} marginLeft={1} variant="h6" textAlign='center'>
                      Weather data unavailable
                    </Typography>
                  </Box>
                </AccordionDetails>}
            </Accordion>
            <Accordion square defaultExpanded disableGutters>
              <AccordionSummary
                expandIcon={<ExpandCircleDownIcon sx={{ 
                  color: '#17BEBB',
                  height:30, 
                  width:30
                }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor:'#3E193E',
                }}
              >
                <Typography sx={{ color:'#FFFFFF'}} variant="h6">
                METAR
                </Typography>
              </AccordionSummary>
              {(weatherdata.metar) ? 
                <AccordionDetails sx={{
                  backgroundColor: 'rgba(41,0,41,1)',
                }}>
                  <Box display='flex' flexDirection='column'>
                    <Box textAlign='center'>
                      <Typography sx={{ color:'#FFFFFF'}} variant="body1" textAlign='center'>
                        {weatherdata.metar}
                      </Typography>
                    </Box>
                    <Box textAlign='center'>
                      {weatherdata.decodedMetar && <Button
                        disabled={isDisabled}
                        onClick={handleDecodeClick}
                        variant='outlined'
                        size="small" 
                        color="inherit"
                        endIcon={<BoltIcon/>}
                        sx={{marginTop:1,
                          backgroundColor: isDisabled ? '#808080' : '#17BEBB',
                          '&:hover': {
                            backgroundColor: '#D90368',
                          }  }}
                      >
                      chatGPT decoder
                      </Button>}
                    </Box>
                    {isDisabled && <MetarDecoder text={weatherdata.decodedMetar}/>}
                  </Box>
                </AccordionDetails>
                :<AccordionDetails sx={{
                  backgroundColor: 'rgba(41,0,41,1)',
                }}>
                  <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' flexGrow={1}>
                    <ErrorIcon sx={{ 
                      color: 'red',
                      height:40, 
                      width:40
                    }}/>
                    <Typography sx={{ color:'#FFFFFF'}} marginLeft={1} variant="h6" textAlign='center'>
                    METAR unavailable
                    </Typography>
                  </Box>
                </AccordionDetails>}
            </Accordion>
            <Grid container direction='row' justifyContent='center' rowSpacing={2} marginTop='15px'>
              {flightData.map((flight, index) => {
                //   const airframedata = flight.airframeData ? Object.entries(flight.airframeData) : []

                return (
                  <Card key={index} sx={{
                    width: `${cardWidth}px`,
                    margin:2,
                    backgroundColor: 'rgba(41,0,41,0.4)',
                    border: 'solid 1px #EBEBD3', 
                  }}>
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