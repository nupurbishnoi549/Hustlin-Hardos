import React from 'react'

const Description = ({ titleText, myClass }) => {
  return (
      <p className={`text-base text-black font-normal leading-[150%] ${myClass}`}>
          {titleText}
      </p>
  )
}

export default Description
