import React from 'react'
import { TEAM_DATA } from '../utils/helper'
import CommonSlider from './common/CommonSwiper'

const Team = () => {
    return (
        <div id='team'>
            <CommonSlider data={TEAM_DATA} title="Team" isTweets={false} />
        </div>
    )
}

export default Team
