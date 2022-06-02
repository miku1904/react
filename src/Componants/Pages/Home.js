import React from 'react'
import Header from '../common/Header'
import Banner from '../Home/Banner/Banner'
import Container from '../Home/Container/Container'
import Footer from '../common/Footer'
import NavBar from './NavBar'

function Home() {
  return (
    <>
        <NavBar/>
        <Header/>
        <Banner/>
        <Container/>
        <Footer/>
    </>
  )
}

export default Home;