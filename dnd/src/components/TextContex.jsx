import React from 'react'

const TextContex = () => {
  return (
    <div className='mt-12 p-3 flex flex-col gap-3 border-orange-500 border-2 rounded-md'>
      <input type="text" placeholder="Add some context.." className="input input-md" />
      <button className="btn">Upload 🚀</button>
    </div>
  )
}

export default TextContex
