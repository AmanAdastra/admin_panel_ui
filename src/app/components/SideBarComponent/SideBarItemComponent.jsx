import React from 'react'

const SideBarItemComponent = (props) => {
  return (
    <div className="flex items-center px-5 mt-3 ml-1 bg-[#fefce8] dark:bg-[#3b2f2f] py-2 rounded-lg">
        <span className='text-[#a5a4a4]'>{props.svg_icon}</span>
        <span className="px-5 text-[#a5a4a4] dark:text-white">{props.text}</span>
      </div>
  )
}

export default SideBarItemComponent