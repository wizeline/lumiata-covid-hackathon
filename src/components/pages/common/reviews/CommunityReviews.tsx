import React, {useState, useEffect} from 'react';
import { Col, Row, Card } from 'antd';
import 'antd/dist/antd.css';
import {ReviewCard} from '../../../cards/review-card';
import data from '../../../../datastore/landing_page.json';

const CommunityReviews = () => {
    const [comments, setComments] = useState<any[]>([]);

    useEffect(() => {
        if (comments.length <= 0) {
            setComments(data.comments);
        }
    }, [comments]);

    return (
        <div className="hero is-light">
            <div className="hero-body">
                <div className="columns">
                    <div className="column is-4">
                        <ReviewCard comment={data.comments[0]}/>
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={data.comments[1]}/>
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={data.comments[2]}/>
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-4">
                        <ReviewCard comment={data.comments[3]}/>
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={data.comments[4]}/>
                    </div>

                    <div className="column is-4">
                        <ReviewCard comment={data.comments[5]}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityReviews;
