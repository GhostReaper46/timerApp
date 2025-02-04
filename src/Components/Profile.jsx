import React from 'react'

const Profile = () => {
  return (
    <div>
      <button
        type='button'
        className='flex items-center focus:outline-none'
        aria-label='toggle profile dropdown'
      >
        <div className='w-11 h-11 overflow-hidden border-0 border-gray-400 rounded-full '>
          <img
            src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
            className='object-cover w-full h-full'
            alt='avatar'
          ></img>
        </div>
      </button>
    </div>
  )
}

export default Profile
