import React from 'react';
import { ReviewCard } from '../../../cards/review-card';
import data from '../../../../datastore/landing_page.json';
import { Review } from '../../../../domain/review';

const CommunityReviews = () => {

    return (
        <div className="hero is-light">
            <div className="hero-body">
                <div className="columns">
                    <div className="column is-4">
                        <ReviewCard comment={(data.comments[0] as unknown) as Review} />
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={(data.comments[1] as unknown) as Review} />
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={(data.comments[2] as unknown) as Review} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-4">
                        <ReviewCard comment={(data.comments[3] as unknown) as Review} />
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={(data.comments[4] as unknown) as Review} />
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={(data.comments[5] as unknown) as Review} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityReviews;
