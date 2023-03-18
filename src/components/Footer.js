import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'


export default function Footer() {
  return (
    <Box sx={{
      width: '100%',
      bottom: 0,
      flexGrow: 1,
      justifyContent: 'center',
      display: 'flex',
      background: '#290029',
      gap:3,
      padding:2
    }}>
      <Button
        href="https://github.com/sadiq-pasha/scheduled_arrivals_server"
        target="_blank" 
        rel="noreferrer"
        color="inherit"
        alt="GitHub repo"
        variant="contained"
        endIcon={<GitHubIcon/>}
        sx={{
          height: '40px',
          width: '150px',
          paddingX: '4px',
          textTransform: 'none',
          backgroundColor: '#17BEBB',
          '&:hover': { backgroundColor: '#D90368'}  
        }}
      >
        <Typography sx={{ color:'#000000'}} variant='body1' m={0} component='h1'>
            GitHub Repo
        </Typography>
      </Button>
      <Button
        href="https://www.buymeacoffee.com/sadiqpasha"
        target="_blank" 
        rel="noreferrer"
        color="inherit"
        alt="Buy Me A Coffee"
        variant="contained"
        endIcon='❤️'
        sx={{
          height: '40px',
          width: '150px',
          paddingX: '4px',
          textTransform: 'none',
          backgroundColor: '#17BEBB',
          '&:hover': { backgroundColor: '#D90368'}  
        }}
      >
        <Typography sx={{ color:'#000000'}} variant='body1' m={0} component='h1'>
            Support me
        </Typography>
      </Button>
    </Box>
  )
}
