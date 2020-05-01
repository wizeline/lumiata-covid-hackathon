import {Name} from "./review";

export interface Service {
    name: Name,
    avatar: string;
    service_type: string;
    business_hours: string;
    payment_type: string;
    location: string;
    maps_location: string;
}

export interface Job {
    name: string;
    job_schedule: string;
    job_type: string;
    location: string;
}
