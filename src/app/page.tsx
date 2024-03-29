import Image from 'next/image'
import HomeHeader from './sections/HomeHeader/HomeHeader'
import Priority from './sections/Priority/Priority'
import Goals from './sections/Goals/Goals'
import Diverse from './sections/Diverse/Diverse'
import HowItWorks from './sections/HowItWorks/HowItWorks'
import Join from './sections/Join/Join'
import Trusted from './sections/Trusted/Trusted'
import Footer from './sections/Footer/Footer'

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <Priority />
      <Goals />
      <Diverse />
      <HowItWorks />
      <Join />
      <Trusted />
      <Footer />
    </div>
  )
}
