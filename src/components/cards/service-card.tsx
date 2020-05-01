import React from 'react';
import { Service } from '../../domain/service';

interface ServiceCardProps {
    item: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }: ServiceCardProps) => {
    return (
        <div className="card">
            <header className="card-header is-shadowless" style={{background: 'rgb(247, 248, 254)'}}>
                <div className="box is-transparent is-shadowless">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img className="is-rounded" src={item.avatar} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <h3 className="title">{item.name.first}</h3>
                            <h4 className="subtitle">{item.name.last}</h4>
                        </div>
                    </div>
                </div>
            </header>
            <div className="card-content">
                <div className="content">
                    <p><img className="card-icon" src="/icons/briefcase-sharp.svg" width={20} />{item.service_type}</p>
                    <p><img className="card-icon" src="/icons/time-sharp.svg" width={20} />{item.business_hours}</p>
                    <p><img className="card-icon" src="/icons/location-sharp.svg" alt="location" width={20}/>{item.location}</p>
                    <p><img className="card-icon" src="/icons/wallet-sharp.svg" alt="location" width={20}/>{item.payment_type}</p>

                    <div className="has-text-centered">
                        <button className="button is-info">Contactar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
