import React from 'react'

function About(props) {

  return (
    <>
     <div id='about' className="text-center font-extrabold mt-[100px] my-10 text-4xl">ABOUT ME</div>
    <div className="flex flex-wrap justify-center items-center  my-[20px] backdrop-filter backdrop-blur-xl bg-white/30 rounded-2xl shadow-xl overflow-hidden w-full ">
    {/* <div className="">
          <img src={props.user?.about?.avatar?.url} alt="3D Model" className="xl:h-[800px] lg:h-[650px] md:h-[630px] sm:h-[600px] h-[500px] " />
        </div>
        <div className=" flex flex-wrap flex-col p-8 text-center">
          <h1 className="text-4xl font-bold text-white"> {props.user?.about?.title}</h1>
          <p className="text-gray-200 my-4">{props.user?.about?.subTitle}<br/><br/>" {props.user?.about?.description} "</p>
        </div> */}
        
        <div className="max-w-[800px] relative  flex   rounded-[10px]  duration-[0.5s]
               overflow-hidden p-[10px] m-[10px_0] ">
                 <div className="p-4">
                   <img src={props.user?.about?.avatar?.url} alt="img1" />
                 </div>
                 <div className="content flex flex-col px-4">
                   
                   
                   <h4 className='text-2xl my-[20px]'>{props.user?.about?.subTitle}</h4>
                   <p className="text-gray-900"> Experience : {props.user?.about?.exp_year} years </p><br/>
                   <p className="text-gray-800"> " {props.user?.about?.description} "</p>
               
                 </div>
               </div>
      
        
     
    </div>
    </>
   
  )
}

export default About