import React from 'react'
import Header from '../../Components/header/Header'
import Slider from '../../Components/swiper/Slider'
// import Featured from '../../Components/featured/Featured'
import Recommended from '../../Components/Recommend/Recommended'
import Latest from '../../Components/latest/Latest'
import TvShow from '../../Components/TvShow/TvShow'
import Footer from '../../Components/footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Slider />
      {/* <Featured/> */}
      <Recommended />
      <Latest />
      <TvShow />
      <Footer />
    </div>
  )
}

export default Home