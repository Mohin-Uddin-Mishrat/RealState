import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaFaceAngry } from 'react-icons/fa6'

export default function Subscribe() {
  return (
    <div className='bg-[#010F58] flex flex-col my-20 items-center pt-20 pb-12 rounded-lg relative'>
        <h1 className="text-[36px] font-helvetica font-bold text-white">Subscribe For Newsletter</h1>
        <p className='text-white'>Be the first one to know the discount offer and events</p>
        <span className='text-white'>Unsubscribe wheevenr You Like</span>
        <div className='p-1 bg-white'>
            <input className='outline-none px-2 py-1' placeholder='Eenter Your Email' ></input>
            <button className='text-[11px] bg-red-500 text-white p-2'>Subscribe Now</button>
        </div>

        <div className='absolute -top-1/4 w-32 h-32 rounded-full bg-white flex items-center justify-center'>
            <div className='w-24 h-24 flex items-center justify-center rounded-full bg-[#010F58]'>
                <FaEnvelope className='text-white text-[36px]'></FaEnvelope>
            </div>
        </div>
    </div>
  )
}
