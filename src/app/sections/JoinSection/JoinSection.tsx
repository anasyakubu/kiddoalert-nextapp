import React from 'react'
import Image from 'next/image'
import IMG from '../../../../public/img-1.jpg'

const JoinSection = () => {
  return (
    <div className="Join" style={{ backgroundColor: '#f2f7f8', color: '#3d4f60' }}>
      <div className="pt-20 p-10 text-center">
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <div className="text-center flex justify-center items-center">
              <Image className="rounded-2xl shadow-lg" src={IMG} alt="" />
            </div>
          </div>

          <div className="mt-10 text-left">
            <h2 className="text-black text-2xl font-bold">Join millions people who use Kiddo Alert and be part of a Secure society</h2>
            <div className="flex mt-10">
              <button className="p-4 mr-5 bg-slate-900 pl-5 pr-5 text-white font-medium rounded-lg hover:bg-slate-800">Get Started</button>
              <button className="p-4 mr-5 bg-slate-200 pl-5 pr-5 text-black font-medium rounded-lg hover:bg-slate-300">Get your school onboard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinSection
