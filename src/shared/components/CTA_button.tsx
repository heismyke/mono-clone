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
      <button className={`w-[50%] flex items-center justify-around h-[56px] rounded-lg ${bgColor}`}>
        <p className={`${textColor}`}>{text}</p>
        <FaArrowRightLong className={`${iconColor}|| textColor} }`} />
      </button>
    </div>
  )
}

export default CTA_button
