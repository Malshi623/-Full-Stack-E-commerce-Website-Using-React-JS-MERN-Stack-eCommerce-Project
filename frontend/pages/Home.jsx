import React from 'react'
import Banner from '../components/Banner'
import LatestCollection from '../components/LatestCollection'
import Title from '../components/Title'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default Home
