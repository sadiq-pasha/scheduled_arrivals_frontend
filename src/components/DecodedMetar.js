import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const MetarDecoder = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [decodeComplete, setDecodeComplete] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      } else {
        setDecodeComplete(true)
      }
    }, 5)

    return () => clearInterval(intervalId)
  }, [currentIndex, text])
  if (decodeComplete) {
    return (
      <Box sx={{marginTop: 1, minHeight: '150px', backgroundColor:'black'}}>
        <Typography component="div" sx={{ color:'#FFFFFF'}} padding={3} variant="body1">
          {text.split('\n').map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          )
          )}
        </Typography>
      </Box>
    )
  } else {
    return (
      <Box sx={{marginTop: 1, minHeight: '150px', backgroundColor:'black'}}>
        <Typography component="div" sx={{ color:'#FFFFFF'}} padding={3} variant="body1">
          <p>
            {displayText}
          </p>
        </Typography>
      </Box>
    )
  }
}
export default MetarDecoder