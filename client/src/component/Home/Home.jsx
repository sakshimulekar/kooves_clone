import React from 'react'
import SingleHomeCard from './SingleHomeCard'
import { Box, Button, Center, Heading } from '@chakra-ui/react'
import Logos from './Logos'
import ImageCarousel from './ImageCarousel'
import Footer from '../Footer'
import { homewomendata } from '../../utils/Homewomendata'
import Products from '../../pages/Products'

const Home = () => {
  
  return (
    <Box mt={20}>
        {/* this imagecarsosel we use for single product page */}
        <ImageCarousel/>
        <Heading>Shop Women's</Heading>
        <SingleHomeCard data={homewomendata}/>
        <Heading>Shop Men's</Heading>
        <center><Button>View More</Button></center>
        <Logos/>
        
        <Footer/>

      </Box>
  )
}

export default Home
