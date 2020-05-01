import React from 'react';
import { format } from 'date-fns';
import { Review } from '../../domain/review';
import { StarFilled } from "@ant-design/icons/lib";

const DATE_FORMAT = 'MMMM dd, yyyy';

type ReviewCardProps = {
    comment?: Review;
};

export const ReviewCard = ({ comment }: ReviewCardProps) => {
    if (comment) {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-96x96">
                                <img className="is-rounded" src={comment.avatar} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="is-size-3">{comment.name.first}</p>
                            <p>{comment.name.last}</p>
                            <p className="has-text-grey-light is-size-7">{comment.userType}</p>
                        </div>
                        <div className="media-right">
                            <p className="has-text-right has-text-grey-light">{format(comment.date, DATE_FORMAT)}</p>
                            <p className="has-text-right"><StarFilled className="has-text-info is-size-4" /> <span className="is-size-3">{comment.rating}</span></p>
                        </div>
                    </div>
                    <div className="content" style={{minHeight: '110px'}}>
                        {'\u226A'}<span className="is-size-4">{comment.content}</span>{'\u226B'}
                        <br/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br/>
                </div>
            </div>
        </div>
    );
};
