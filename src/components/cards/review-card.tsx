import React from 'react';

type ReviewCardProps = {
    comment?: any,
}

export const ReviewCard: React.FC<ReviewCardProps> = ({comment}) => {
    if (comment) {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <figure className="image is-64x64">
                            <img className="is-rounded" src={comment.avatar} />
                        </figure>
                        {comment.content}
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
