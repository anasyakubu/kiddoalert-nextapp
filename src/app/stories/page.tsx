import React from 'react'
import StoriesHeader from '../sections/StoriesHeader/StoriesHeader'
import JoinSection from '../sections/JoinSection/JoinSection'
import Trusted from '../sections/Trusted/Trusted'
import Footer from '../sections/Footer/Footer'

const page = () => {
  return (
    <div className="page">
      <StoriesHeader />
      <JoinSection />
      <Trusted />
      <Footer />
    </div>
  )
}

export default page
