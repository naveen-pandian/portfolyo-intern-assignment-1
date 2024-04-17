import React from 'react'

function Hero(props) {
  return (
    <div className="flex flex-wrap justify-center items-center  mt-[100px] my-[20px] backdrop-filter backdrop-blur-xl bg-white/30 rounded-2xl shadow-xl overflow-hidden w-full max-w-7xl">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-white">Hey I'm {props.user?.about?.name}</h1>
          <p className="text-gray-200 my-4">{props.user?.about?.title}<br/>{props.user?.about?.subTitle}</p>
        </div>
        <div className="">
          <img src={props.user?.about?.avatar?.url} alt="3D Model" className="xl:h-[800px] lg:h-[650px] md:h-[630px] sm:h-[600px] h-[500px] " />
        </div>
      
        
     
    </div>
  )
}

export default Hero