import React from 'react';
import { Service } from '../../domain/service';

interface ServiceCardProps {
    item: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }: ServiceCardProps) => {
    return (
        <div className="card">
            <header className="card-header is-shadowless" style={{background: 'rgb(247, 248, 254)'}}>
                <p className="card-header-title">
                    {item.name}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>{item.job_type}</p>
                    <p><img src="/icons/time-sharp.svg" width={20} />{item.job_schedule}</p>
                    <p><img src="/icons/location-sharp.svg" alt="location" width={20}/>{item.location}</p>

                    <div className="has-text-centered">
                        <button className="button is-info">Contactar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
