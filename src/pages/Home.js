// material ui imports
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import SearchAppBar from '../components/Navbar'
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
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 10,
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
      setAirframeData(response.map(each => {
        return each.airframeData ? Object.entries(each.airframeData) : null
      }))
    })
  },[])
  
  if (flightData) {
    return (
      <div className="App">
        <SearchAppBar/>
        <Container
          sx={{
            border: 'solid 1px #EBEBD3', 
            borderRadius: 2,
            backgroundColor: 'rgba(41,0,41,0.4)',
            marginY: 3,
          }}>
          <Typography sx={{ color:'#FFFFFF' }} variant='h6' component='h1' m={1}>
            Los Angeles International
          </Typography>
          <Grid container direction='column' justifyContent='center' alignItems='center' rowSpacing={2}>
            {flightData.map((flight, index) => {
            //   const airframedata = flight.airframeData ? Object.entries(flight.airframeData) : []

              return (
                <Card key={index} sx={{
                  marginY:2,
                  backgroundColor: 'rgba(41,0,41,0.4)',
                  border: 'solid 1px #EBEBD3', 
                  borderRadius: 2}}>
                  <CardActionArea href={flight.photo.link}>
                    <CardMedia
                      sx={{objectFit:'contain'}}
                      component='img'
                      image={flight.photo.photo}
                      alt={flight.registration}
                    />
                  </CardActionArea>
                  <Typography sx={{ color:'#FFFFFF', backgroundColor:'black'}} paddingLeft='5px' variant="caption">
                    photo credits: {flight.photo.credit}
                  </Typography>
                  <CardContentNoPadding>
                    <Typography sx={{ color:'#FFFFFF' }} variant="h4" component="h1">
                      <Link href={`https://flightaware.com/live/flight/${flight.ident}`}>{flight.ident}</Link><br/>
                      <Button
                        href={`https://flightaware.com/live/flight/${flight.ident}`}
                        variant='contained'
                        size="small" 
                        color="success"
                        endIcon={<OpenInNewIcon/>}
                        sx={{
                        }}>
                            track on flightaware
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
                    {
                      (flight.scheduled_on !== flight.estimated_on) && 
                        <Box marginTop={1}>
                          <Typography sx={{ color:'#FFFFFF' }} variant="h6" component="h1">
                            {flight.status}
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                            Scheduled departure:<br/>
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body2" component="h1">
                            {new Date(flight.scheduled_off).toString().slice(0,24)} PST
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                            Scheduled arrival:<br/>
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body2" component="h1">
                            {new Date(flight.scheduled_on).toString().slice(0,24)} PST
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                            Enroute arrival:<br/>
                          </Typography>
                          <Typography sx={{ color:'#FFFFFF' }} variant="body2" component="h1">
                            {new Date(flight.estimated_on).toString().slice(0,24)} PST
                          </Typography>
                        </Box>
                    }
                    {
                      (flight.scheduled_on === flight.estimated_on) && 
                      <Box marginTop={1}>
                        <Typography sx={{ color:'#FFFFFF' }} variant="h6" component="h1">
                          {flight.status}
                        </Typography>
                        <Typography sx={{ color:'#FFFFFF' }} variant="body1" component="h1">
                            Scheduled arrival:<br/>
                        </Typography>
                        <Typography sx={{ color:'#FFFFFF' }} variant="body2" component="h1">
                          {new Date(flight.scheduled_on).toString().slice(0,24)} PST
                        </Typography>
                      </Box>
                    }
                    <Box marginTop={1}>
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
                      flight.airframeData &&
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
                    }
                  </CardContentNoPadding>
                </Card>
              )
            })
            }
          </Grid>
        </Container>
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default Home