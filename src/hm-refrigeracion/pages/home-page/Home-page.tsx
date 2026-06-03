import React from 'react'
import { Navbar } from '../../components/header/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Carousel } from '../../components/carrousel/Carousel'

export const HomePage = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <h1>BODY</h1>
        <Footer />
    </>
  )
}
