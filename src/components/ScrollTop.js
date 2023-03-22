import { useState, useEffect } from 'react'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import IconButton from '@mui/material/IconButton'

const Scroll = ({showBelow}) => {
  const [show, setShow] = useState(showBelow ? false : true)
  
  const handleClick = () => {
    window['scrollTo']({top: 0, behavior:'smooth'})
  }
  
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <div>
      {show && 
            <IconButton 
              onClick={handleClick} 
              size='large'
              sx={
                {
                  zIndex: 2,
                  position: 'fixed',
                  bottom: '2vh',
                  backgroundColor: '#17BEBB',
                  color: 'black',
                  opacity: '60%',
                  '&:hover, &.Mui-focusVisible': {
                    transition: '0.3s',
                    backgroundColor: '#D90368'
                  },
                  right: '4%'
                }
              }
            >
              <ExpandLessOutlinedIcon/>
            </IconButton>

      }
    </div>
  )
}

export default Scroll