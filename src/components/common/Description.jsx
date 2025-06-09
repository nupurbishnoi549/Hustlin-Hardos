import React from 'react'

const Description = ({ titleText, myClass }) => {
    return (
        <p className={`text-black leading-[150%] ${myClass}`}>
            {titleText}
        </p>
    )
}

export default Description
