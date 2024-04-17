import React from 'react';

function Contact(props) {
  return (
    <div id="contact" className="flex flex-col justify-center items-center ">
      <div className="text-center font-extrabold mt-20 my-10 text-4xl">CONTACT</div>
      <div className="backdrop-filter backdrop-blur-xl bg-white/30 rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Let's Talk</h1>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-200 mb-2">Name:</label>
            <input type="text" id="name" name="name" className="bg-gray-800 text-white px-4 py-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-200 mb-2">Email:</label>
            <input type="email" id="email" name="email" className="bg-gray-800 text-white px-4 py-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-200 mb-2">Phone:</label>
            <input type="tel" id="phone" name="phone" className="bg-gray-800 text-white px-4 py-2 rounded-md" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="text-gray-200 mb-2">Tell us about your project:</label>
            <textarea id="message" name="message" rows="5" className="bg-gray-800 text-white px-4 py-2 rounded-md w-full"></textarea>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div>
          <a className='text-gray-200 md:text-xl text-[15px] font-extrabold' ><ion-icon name="receipt-outline" ></ion-icon> &nbsp;{props.user?.about?.address}
           </a> 
          </div>
          <div>
          <a className='text-gray-200 md:text-xl text-[15px] font-extrabold' href={`mailto:${props.user?.email}`}><ion-icon name="mail-unread-outline" ></ion-icon> &nbsp;{props.user?.email}
           </a>
          </div>
          <div>
          <a className='text-gray-200 md:text-xl text-[15px] font-extrabold' href={`tel:${props.user?.about?.phoneNumber}`}><ion-icon name="call-outline" ></ion-icon> &nbsp;{props.user?.about?.phoneNumber}
           </a>
                                            
           
          
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Submit</button>
      </div>
      
            <div className="absolute bg-black w-full text-center translate-y-[600px]  ">
                <div className="">
                    <ul className="flex justify-center gap-6 my-10">
                        {props.social?.map((item,index)=>(
                        <li key={index} >
                            <a href={`${item.url}`}>
                              <img className="h-14 " src={`${item.image.url}`} alt="footerImage"/>
                            </a>
                        </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="text-white my-10">
                    <p>&copy; 2024 {props.user?.about?.name}. All Rights Reserved</p>
                </div>
            </div>
        
    </div>
  );
}

export default Contact;
