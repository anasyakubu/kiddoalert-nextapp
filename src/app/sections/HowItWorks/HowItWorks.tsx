import Link from 'next/link'
import React from 'react'
import './HowItWorks.scss'
import { FaArrowRight, FaLock } from 'react-icons/fa'

const HowItWorks = () => {
  return (
    <div className="HowItWork text-black" style={{ backgroundColor: '#f2f7f8' }}>
      <div className="p-10">
        <div className="text-center mt-10 mb-20">
          <h1 className="text-3xl font-extrabold" style={{ color: '#122231' }}>
            How Its Works
          </h1>
          <p className="mt-5 font-medium text-xl" style={{ letterSpacing: '2px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ducimus?
          </p>
        </div>

        <div className="flex justify-center mt-5">
          <iframe
            className="rounded-3xl shadow-xl"
            width="400px"
            height="550"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
