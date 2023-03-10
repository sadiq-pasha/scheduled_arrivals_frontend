import Box from '@mui/system/Box'
import SearchAppBar from '../components/Navbar'
import ImageCollage from '../components/ImageCollage'

const About = () => {
  return (
    <div>
      <SearchAppBar/>
      <Box marginTop={3} sx={{display: 'flex'}}>
        <img 
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
        />
        <ImageCollage/>
      </Box>
    </div>
  )
}

export default About