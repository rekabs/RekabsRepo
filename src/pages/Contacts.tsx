import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/db99eb43-4e4a-41d4-94ea-2d3f5d989e31" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-fuchsia-900 text-zinc-700'>Contact</p>
          <p className='text-zinc-700 py-4'>// Get in touch with me by submitting the form below.  Responses are timely.</p>
        </div>
        <input className='bg-violet-200 p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-violet-200' type="text" placeholder='Email' name='email' />
        <textarea className='bg-violet-200 p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-zinc-500 border-2 hover:bg-violet-500 hover:border-violet-500 hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Submit it</button>
      </form>
    </div>
  )
}

export default Contact