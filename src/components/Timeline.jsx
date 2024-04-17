import React, { useState } from 'react';

function Timeline(props) {
  const [activeTab, setActiveTab] = useState('education');

  return (
    
      
      <div className=" mt-[90px] backdrop-filter backdrop-blur-xl bg-white/30 rounded-2xl shadow-xl overflow-hidden w-full ">
      <div className="p-8 text-center">
        
        <div className="flex justify-center my-4">
          <button
            className={`px-4 py-2 mx-2 rounded-xl focus:outline-none ${
              activeTab === 'education' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-xl focus:outline-none ${
              activeTab === 'experience' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>
        
        <div className="relative">
          {activeTab === 'education' &&
            props.education.map((item, index) => (
              <div key={index} className="relative mb-4 ml-8 p-4 bg-black text-white rounded-lg">
                <h2 className="text-xl font-bold">{item.company_name}</h2>
                <p className=' text-gray-400'>{`${item.startDate.substring(0,10)} - ${item.endDate.substring(0,10)}`}</p>
                <p>{item.jobTitle}<br/>{item.jobLocation}</p>
                <span class="absolute top-0 left-0 bottom-0 h-full w-full bg-black text-white flex justify-center items-center text-md opacity-0 transition-opacity duration-[0.5s] hover:opacity-[1] font-extrabold">" {item.summary} "</span>
                <div className="absolute left-0 top-0 bottom-0 w-2 h-full bg-gray-600"></div>
              
              </div>
              
            ))}
          {activeTab === 'experience' &&
            props.experience.map((item, index) => (
              <div key={index} className="relative mb-4 ml-8 p-4 bg-black text-white rounded-lg">
                <h2 className="text-xl font-bold">{item.company_name}</h2>
                <p className=' text-gray-400'>{`${item.startDate.substring(0,10)} - ${item.endDate.substring(0,10)}`}</p>
                <p>{item.jobTitle}<br/>{item.jobLocation}</p>
                <span class="absolute top-0 left-0 bottom-0 h-full w-full bg-black text-white flex justify-center items-center text-md opacity-0 transition-opacity duration-[0.5s] hover:opacity-[1] font-extrabold">" {item.summary} "</span>
               
                <div className="absolute left-0 top-0 bottom-0 w-2 h-full bg-gray-600"></div>
              </div>
            ))}
        </div>
      </div>
    </div>

    
    
  );
}

export default Timeline;
