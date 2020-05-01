import React, { useState } from 'react';
import { JobCard } from '../../cards/job-card';
import { ServiceCard } from '../../cards/service-card';
import cx from 'classnames';

const createResultChunks = (data: any[], chunkSize: number) => {
    const result = [];
    for (let index = 0; index < data.length; index += chunkSize) {
        result.push(data.slice(index, index + chunkSize));
    };
    return result;
};

interface MapResultsProps {
    results: any[];
    type: string;
}

export const MapResults: React.FC<MapResultsProps> = ({results, type}: MapResultsProps) => {
    const pageSize = 3;
    const [page, setPage] = useState(0);
    const resultPages = results.length > 3 ? createResultChunks(results, pageSize) : [results];

    const [location, setLocation] = useState('México');

    const goPreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const goNextPage = () => {
        if (page < resultPages.length - 1) {
            setPage(page + 1);
        }
    };

    const updateLocation = (newLocation: string) => {
        setLocation(newLocation);
    }

    return (
        <div className="columns">
            <div className="column is-4">
                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <div className="select is-fullwidth">
                                <select>
                                    <option>Jobs</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">
                            <div className="select is-fullwidth">
                                <select>
                                    <option>Services</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {resultPages[page].map((item) => {
                        if (type === 'servicios') {
                            return (
                                <div className="box is-shadowless">
                                    <ServiceCard item={item} key={item.name} onClick={(newLocation: string) => updateLocation(newLocation)}/>
                                </div>
                            );
                        }
                        return <div className="box is-shadowless"><JobCard item={item} key={item.name} onClick={(newLocation: string) => updateLocation(newLocation)}/></div>
                    })}
                    <div className="section">
                        <nav className="pagination is-small is-centered" role="navigation" aria-label="pagination">
                            {resultPages.length > 1 && (
                                <>
                                <a onClick={goPreviousPage} className="pagination-previous">{'<'}</a>
                                <a onClick={goNextPage} className="pagination-next">{'>'}</a>
                                </>
                            )}
                            <ul className="pagination-list">
                                {resultPages.map((_, index) => (
                                    <li key={index}>
                                        <a
                                            className={cx("pagination-link", {'is-current': page === index})}
                                            aria-label="Goto page 1"
                                            onClick={() => setPage(index)}
                                        >
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="column is-7 is-offset-1">
            <iframe id="maps"
                width="100%"
                height="100%"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAljlnyprtCKwmLCW675zJjE2fW_RZMHHs
                    &q=${location}`}>
                </iframe>
            </div>
        </div>
    );
};
