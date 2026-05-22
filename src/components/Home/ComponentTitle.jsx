import React from 'react'
import { RxAvatar } from "react-icons/rx";

const ComponentTitle = (props) => {
  return (
    <div className='flex items-center justify-center flex-col mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-8 text-center'>
      <div className='flex items-center gap-2 border-2 rounded-2xl bg-white px-3 pl-0'>
        <RxAvatar className='text-xl mx-1 bg-gray-600 rounded-full' />
        <h4 className='text-sm font-medium sm:text-base'>{props.tagLine}</h4>
      </div>
      <h1
        style={props.size ? { fontSize: `${props.size}px` } : {}}
        className={`${!props.size ? 'text-3xl sm:text-4xl lg:text-5xl' : ''} whitespace-pre-line font-semibold my-4 sm:my-5 mb-1 leading-tight`}
      >
        {props.title}
      </h1>
      <p className='text-sm font-medium sm:text-base text-black max-w-xl leading-relaxed'>{props.desc}</p>
    </div>
  )
}

export default ComponentTitle