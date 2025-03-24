import React from 'react'

function AnimatedText({text,className=""}) {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <h1 className={`text-6xl inline-block w-full capitalize ${className}`}>
        {text.split(" ").map((word,index)=>(
            <span key={index} className='inline-block'>
                {word}&nbsp;
            </span>
        ))
        }
      </h1>
    </div>
  )
}

export default AnimatedText