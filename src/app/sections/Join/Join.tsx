import React from 'react'

const Join = () => {
  return (
    <div className="Join" style={{ backgroundColor: '#f2f7f8', color: '#3d4f60' }}>
      <div className="pt-20 p-10 text-center">
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="mt-10 text-left">
            <h2 className="text-black text-2xl font-bold">Join millions people who use Kiddo Alert and be part of a Secure society</h2>
            <div className="flex mt-10">
              <button className="p-4 mr-5 bg-slate-900 pl-5 pr-5 text-white font-medium rounded-lg hover:bg-slate-800">Get Started</button>
              <button className="p-4 mr-5 bg-slate-200 pl-5 pr-5 text-black font-medium rounded-lg hover:bg-slate-300">Get your school onboard</button>
            </div>
          </div>
          <div className="">
            <div className="mockup-browser border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">https://kiddoalert.com</div>
              </div>
              <div className="flex justify-center px-4 py-16 text-lg bg-base-200">
                Welcome To <span className="text-blue-600"> Kiddo Alert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
