import React, { useState } from 'react';
import { ServiceCard } from '../../cards/service-card';

const createResultChunks = (data: any[], chunkSize: number) => {
    const result = [];
    for (let index = 0; index < data.length; index += chunkSize) {
        result.push(data.slice(index, index + chunkSize));
    };
    return result;
}

interface MapResultsProps {
    results: any[];
}

export const MapResults: React.FC<MapResultsProps> = ({results}: MapResultsProps) => {
    const pageSize = 3;
    const [page, setPage] = useState(0);
    const resultPages = results.length > 3 ? createResultChunks(results, pageSize) : [results];

    return (
        <div className="columns">
            <div className="column is-4">
                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <div className="select is-fullwidth">
                                <select>
                                    <option>Servicios</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">
                            <div className="select is-fullwidth">
                                <select>
                                    <option>Oficios</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {resultPages[page].map((item) => <div className="box is-shadowless"><ServiceCard item={item} key={item.name} /></div>)}

                    <div className="section">
                        <nav className="pagination is-small is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous">{'<'}</a>
                            <a className="pagination-next">{'>'}</a>
                            <ul className="pagination-list">
                                {resultPages.map((_, index) => (
                                    <li key={index}>
                                        <a className="pagination-link"
                                           aria-label="Goto page 1"
                                           onClick={() => setPage(index)}>{index + 1}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="column is-7 is-offset-1">
                <img src="/Map.png" alt="map" />
            </div>
        </div>
    );
};
