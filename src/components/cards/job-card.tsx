import React from 'react';
import { Job } from '../../domain/service';

interface ServiceCardProps {
    item: Job;
    onClick: any;
}

export const JobCard: React.FC<ServiceCardProps> = ({ item, onClick }: ServiceCardProps) => {
    return (
        <div className="card" onClick={() => onClick(item.maps_location)}>
            <header className="card-header is-shadowless" style={{background: 'rgb(247, 248, 254)'}}>
                <p className="card-header-title">
                    {item.name}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <p><img className="card-icon" src="/icons/briefcase-sharp.svg" width={20} />{item.job_type}</p>
                    <p><img className="card-icon" src="/icons/time-sharp.svg" width={20} />{item.job_schedule}</p>
                    <p><img className="card-icon" src="/icons/location-sharp.svg" alt="location" width={20}/>{item.location}</p>

                    <div className="has-text-centered">
                        <button className="button is-info">Contactar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
