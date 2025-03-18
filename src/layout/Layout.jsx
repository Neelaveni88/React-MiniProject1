import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
    <Box>
      <NavBar/>  
    </Box>
    <Box>
        <Footer/>
    </Box>
    </>
        
   
  )
}

export default Layout