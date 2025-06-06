import React from 'react';
import CommonSlider from './common/CommonSwiper';
import { TWEETS_DATA } from '../utils/helper';

const LatestTweets = () => {
    return (
        <div id="about">
            <CommonSlider data={TWEETS_DATA} title="Latest Tweets" isTweets={true} />
        </div>
    );
};

export default LatestTweets;
