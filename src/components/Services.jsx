import React from 'react'

function Services(props) {
  return (
    <div id='expertise' className='flex flex-col justify-center items-center'>
   <div className="text-center font-extrabold mt-20 my-10 text-4xl">MY EXPERTISE</div>
    <div className="box  min-w-[350px] min-h-[400px]">
      <h3>What I Do</h3>
      {props.services?.map((item,index)=>(
        <div key={index} className="list p-[10px] m-[10px_0] hover:translate-x-[100px] hover:translate-y-[-15px]">
                <div className="imgBx">
                  <img src={item.image?.url} alt="img1" />
                </div>
                <div className="content">
                  {/* <h2 className="rank"><small>Charge : </small>{item.charge}</h2> */}
                  <h4>{item.name}</h4>
                  <p>{item.desc}<br/>Charge : {item.charge}</p>
                </div>
              </div>
              
      ))}
      
    </div>
    </div>
  )
}

export default Services