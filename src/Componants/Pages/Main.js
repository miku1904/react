import React from 'react'
import Header from '../common/Header';
import DataTable from '../mainPage/DataTable';
import Photowrapper from '../mainPage/Photowrapper';
import NavBar from './NavBar';

const Main = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <DataTable/>
    <Photowrapper/>
    </>
  )
}

export default Main;
