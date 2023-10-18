import Link from 'next/link'
import React from 'react'
import './Diverse.scss'
import { FaArrowRight, FaLock } from 'react-icons/fa'

const Diverse = () => {
  return (
    <div className="Diverse bg-white text-black">
      <div className="p-10">
        <div className="text-center mt-10 mb-20">
          <h1 className="text-3xl font-extrabold" style={{ color: '#122231' }}>
            Diverse ways to Invest
          </h1>
          <p className="mt-5 font-medium text-xl" style={{ letterSpacing: '2px' }}>
            Grow your security for your child.
          </p>
        </div>

        <div className="cardContainer m-10 rounded-3xl shadow-xl bg-indigo-600">
          <div className="p-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <h3 className="text-white mt-5 mb-5 text-2xl font-bold">Receive Up to 2 message</h3>
              <p className="mb-5 text-xl text-slate-300">
                Invest securely and confidently on the security of your child. Grow yourself confidently by investing in Kiddo Alert with opportunities.
              </p>
              <div className="mt-20">
                <Link className="flex font-bold text-md hover:underline text-white" href="/">
                  <FaArrowRight />
                  <span className="ml-5">Learn about Kiddo Alert</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="mockup-phone h-96 phoneImg">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <h2>Kiddo Alert</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diverse
