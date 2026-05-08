import React from 'react'
import Banner from '../components/Banner'
import LatestCollection from '../components/LatestCollection'
import Title from '../components/Title'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestCollection/>
      <BestSeller/>
    </div>
  )
}

export default Home
