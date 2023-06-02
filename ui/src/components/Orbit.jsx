import React from 'react'

const Orbit = () => {
  return (
		<div className='relative mt-20'>
			<div className='h-20 w-20 rounded-full bg-blue-600' />
			<div className='h-5 w-5 rounded-full inset-0 absolute bg-sky-800 m-auto animate-orbit' />
		</div>
  )
}

export default Orbit
