import React from 'react'

import { FaArrowRightLong } from 'react-icons/fa6'

interface ButtonProps {
  text: string
  bgColor: string
  textColor: string
  iconColor?: string
}

const CTA_button: React.FC<ButtonProps> = ({ text, bgColor, textColor, iconColor }) => {
  return (
    <div>
      <button className={` flex items-center justify-around p-4 gap-3  rounded-lg ${bgColor}`}>
        <p className={`${textColor}`}>{text}</p>
        <FaArrowRightLong className={`${iconColor} }`} />
      </button>
    </div>
  )
}

export default CTA_button
