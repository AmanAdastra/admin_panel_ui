import React from 'react'

const SideBarItemComponent = (props) => {
  return (
    <div className="flex items-center px-5 mt-5 ml-2 bg-[#fff4cb] dark:bg-black py-2 rounded-lg">
        {props.svg_icon}
        <span className="px-5 text-black dark:text-white">{props.text}</span>
      </div>
  )
}

export default SideBarItemComponent