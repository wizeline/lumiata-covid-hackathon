import React from 'react';

const defaultText = 'Selecciona la categoria que mejor se adapte a lo que necesitas ahora.'

type InfoCardProps = {
    text: string,
}

export const InfoCard: React.FC<InfoCardProps> = ({text = defaultText}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <div>
                        1
                    </div>
                    <div>
                        Icon
                    </div>
                    <p>
                    </p>
                    <br/>
                </div>
            </div>
        </div>
    );
};
