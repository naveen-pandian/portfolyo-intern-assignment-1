import React from 'react'

function Skills(props) {
  
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className="text-center font-extrabold mt-20 my-10 text-4xl">SKILLS</div>
    <div className="box  max-w-[900px] flex flex-wrap">
    
      {props.skills?.map((item,index)=>(
        <div key={index} className="list p-[10px] h-[100px] w-[200px] grow m-[5px]">
                <div className="imgBx">
                  <img src={item.image?.url} alt="skill_img" />
                </div>
                <div className="content">
                  <h2 className="rank">{item.percentage}<small> %</small></h2>
                  <h4>{item.name}</h4>
                 
                </div>
              </div>
              
      ))}
    </div>
    </div>
    
  );
}

export default Skills