import React from 'react'

import './App.css'
import './index.css'

import {CTA, Brand, Navbar} from './components'
import {Blog, Features, Footer, Header, Possibility, WhatGpt3} from './containers'

export default function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  )
}
