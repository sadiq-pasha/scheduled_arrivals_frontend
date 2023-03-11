// material UI imports
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Link from '@mui/material/Link'

//component imports 
import airportDiagram from '../images/KLAX_FAA_Airport_Diagram.png'
import SearchAppBar from '../components/Navbar'

//react router imports
import { Link as reactRouter } from 'react-router-dom'
import { Box } from '@mui/system'


// function to create table data
function createData(key, value) {
  return { key, value}
}
  
const rows = [
  createData('Opened', 'October 1, 1928'),
  createData('Passengers (2022)', '65,924,298'),
  createData('Aircraft operations', '556,913'),
  createData('Runways', '24R, 24L, 25R, 25L'),
  createData('Reverse ops', '6L, 6R, 7L, 7R'),
  createData('Airlines served', 'approx. 70'),
]

// main page component
const LaxInfo = () => {
  return (
    <div>
      <SearchAppBar/>
      <Container
        sx={{
          border: 'solid 1px #EBEBD3', 
          borderRadius: 2,
          backgroundColor: 'rgba(41,0,41,0.4)',
          marginY: 3,
        }}
      >
        <Card sx={{ alignItems: 'center', margin: 2}}>
          <CardActionArea component={reactRouter} to={'/airportdiagram'}>
            <CardMedia
              component="img"
              style={{height:'900', width:'900'}}
              image={airportDiagram}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Typography sx={{ color:'#FFFFFF' }} variant='h4' component='h1' m={1} align='center'>
            Los Angeles International Airport (KLAX)
        </Typography>
        <Box marginTop={3}>
          <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
            The X in LAX
          </Typography>
          <Typography sx={{ color:'#FFFFFF'}} variant='body1' m={2} component='h1'>
            Before the 1930s, US airports used a two-letter abbreviation and at that time, 
            LA served as the designation for Los Angeles Airport.
            In 1947, the identifiers expanded to three letters and LA received an extra letter to become LAX. 
            The letter X does not otherwise have any specific meaning in this identifier.
          </Typography>
        </Box>
        <Box marginTop={3}>
          <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
                Airport Information
          </Typography>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.key}
                >
                  <TableCell sx={{borderBottom: 'none', color: '#FFFFFF', width:'50%'}} component="th" scope="row">
                    {row.key}
                  </TableCell>
                  <TableCell sx={{borderBottom: 'none', color: '#FFFFFF'}}>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Box marginTop={3}>
          <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
                Planespotting at LAX
          </Typography>
          <Typography sx={{ color:'#FFFFFF'}} variant='body1' m={2} component='h1'>
            <Link href='https://goo.gl/maps/H9N7eomTGHPj2CSq8'>Clutters Park</Link> in El Segundo is a prime location for aircraft spotting for takeoffs from 25L/25R.<br/>
            Another popular spotting location sits under the final approach for runways 24L/24R at the <Link href='https://goo.gl/maps/nc99uHpquUAsWgiL6'>In-N-Out Burger</Link> on Sepulveda Boulevard.<br/>
            This is one of the few remaining locations in Southern California from which spotters can watch a wide variety of low-flying commercial airliners from directly underneath their flight paths.<br/>
            You can also tune into the airport controller communications.<br/>
            <Link href='https://www.liveatc.net/hlisten.php?mount=klax5&icao=klax'>LAX ground comms on LiveATC.net</Link><br/>
            <Link href='https://www.liveatc.net/hlisten.php?mount=klax_twr&icao=klax'>LAX tower comms on LiveATC.net</Link>

          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default LaxInfo

