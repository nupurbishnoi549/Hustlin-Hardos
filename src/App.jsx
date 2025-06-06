import React from 'react'
import Header from './components/common/Header'
import Hero from './components/Hero'
import BreakingNews from './components/BreakingNews'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'
import Roadmap from './components/RoadMap'
import Team from './components/Team'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team />
      <Faqs />
      <Footer/>
    </>
  )
}

export default App
