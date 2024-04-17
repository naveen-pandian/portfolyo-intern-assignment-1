import React from 'react'

function Testimonial(props) {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className="text-center font-extrabold mt-20 my-10 text-4xl">CUSTOMERS FEEDBACK</div>
     <div className="box  max-w-[800px] min-h-[400px]">
       {props.testimonials?.map((item,index)=>(
         <div key={index} className="list p-[10px] m-[10px_0] hover:translate-x-[100px] hover:translate-y-[-15px]">
                 <div className="p-4">
                   <img src={item.image?.url} alt="img1" />
                 </div>
                 <div className="content">
                   {/* <h2 className="rank"><small>Charge : </small>{item.charge}</h2> */}
                   <h4>{item.name}</h4>
                   <p>{item.position}</p>
                   <p>{item.review}</p>
                 </div>
               </div>
               
       ))}
       
     </div>
     </div>
  )
}

export default Testimonial