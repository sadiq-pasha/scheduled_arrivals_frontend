import SearchAppBar from '../components/Navbar'
import Box from '@mui/system/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/system/Container'
import Link from '@mui/material/Link'

const About = () => {
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
        <Box marginTop={3}>
          <Typography sx={{ color:'#FFFFFF' }} variant='h4' component='h1' m={1} align='center' >
            Hello! 👋🏾
          </Typography>
          <Box marginTop={3}>
            <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
                About this website:
            </Typography>
            <Typography sx={{ color:'#FFFFFF'}} variant='body1' m={2} component='h1'>
            Hi! 🙂 My name is <Link href='https://www.linkedin.com/in/sadiq-pasha/'>Sadiq</Link>, I am a full stack web developer.<br/>
            Planespotting is one my favourite hobbies and I am lucky to live in Southern California where we have some of the best planespotting in the world.<br/>
            Watching planes at LAX is fun, but it means juggling multiple websites to find information on arriving aircraft.<br/>
            I am always curious about aircraft flying in from all over the world, full of people with dreams, ambitions, fears; the pilots who fly these aircraft and of course; the fantastic aircraft themselves.<br/>
            I want to know all I can about the planes I watch. Where they come from, how long they have been flying, when they were made and by whom.<br/>
            I created this website as a way to put all that information together in one place.<br/>
            </Typography>
          </Box>
          <Box marginTop={3}>
            <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
            💻 Tech Stack:
            </Typography>
            <Typography sx={{ color:'#FFFFFF'}} variant='body1' m={2} component='h1'>
                As this is a portfolio website, following is the tech stack that it is built on:<br/>
                1️⃣ REACT as the front end  UI framework.<br/>
                2️⃣ MATERIAL UI for the reusable components and customisability.<br/>
                3️⃣ EXPRESS as the backend server.<br/>
                4️⃣ NODEJS as the backend runtime environment.<br/>
                5️⃣ AXIOS for fetching data from the server.<br/>
                6️⃣ MONGODB as the database for flight and airframe data.<br/>
                7️⃣ GITHUB fer version control.<br/>
                8️⃣ Various API services for fetching data.<br/>
                9️⃣ And so much more. . . <br/><br/>
                
                I also used some cool tricks like Request Throttling, Error Handling, Cron Scheduling and Rate Limiting to not overload the server.<br/><br/>

                If you use any part of this stack, I would love to work with you and learn more! Connect with me on <Link href='https://www.linkedin.com/in/sadiq-pasha/'>LinkedIn</Link>.
            </Typography>
          </Box>
          <Box marginTop={3}>
            <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
            ⚙️ How it works:
            </Typography>
            <Typography sx={{ color:'#FFFFFF'}} variant='body1' m={2} component='h1'>
            Lets start with the backend, which is where MOST of the work takes place.<br/>
            The backend first makes a request to the <Link href='https://flightaware.com/commercial/aeroapi/'>flightaware AeroAPI</Link> to request a list of scheduled arrivals at LAX.<br/>
            The API replies with a list of arrivals and various related metadata. The server then extracts pertinent information from the response; such as flight numbers, flight registration, origin, destination, flight time, etc.<br/>
            The next step is to get photos of the aircraft. This is done using the <Link href='https://www.planespotters.net/photo/api'>planespotters public API</Link>.<br/>
            Once the photos are curated, airframe data is requested from <Link href='https://www.goflightlabs.com/'>goflightlabs</Link>.<br/>
            This completes the data acquisition. The data is then sanitized and converted into JSON, after which it is stored on the server awaiting requests from users.<br/>
            Flights for which tail numbers and photos are not found are then filtered; as these are critical to the website.<br/>
            The front end of the website is a React skeleton painted over with a thick Material UI coating. React hooks handle all of the data fetching and state management.<br/>
            Material UI provides reusable components such as Containers, Modals, Links and the Navbar.<br/>
            Client side routing is handled by React router. 
            </Typography>
          </Box>
          <Box marginTop={3}>
            <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
            ⚠️ Limitations and future work:
            </Typography>
            <Typography sx={{ color:'#FFFFFF'}} variant='body1' m={2} component='h1'>
            Data is like gold on the internet. It is expensive to get data for real time information, and even more so when querying multiple services.<br/>
            As of now there is a limit of 15 aircraft per request.<br/>
            This can be changed in the future to make it more dynamic.<br/>
            </Typography>
          </Box>
          <Box marginTop={3}>
            <Typography sx={{ color:'#FFFFFF'}} variant='h5' component='h1' m={2} align='left'>
            🚫 Disclaimers and such:
            </Typography>
            <Typography sx={{ color:'#FFFFFF'}} variant='body1' m={2} component='h1'>
            This website is a personal project created using data that is freely available on the internet.<br/>
            The data is used as is. Care has been taken to sanitize the data but it is used as obtained.<br/>
            This website must not be used for real world planning.<br/>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default About