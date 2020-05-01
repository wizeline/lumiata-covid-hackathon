import React from 'react';

export const SearchBar = () => {
    return (
        <div className="columns">
            <div className="column is-3 is-offset-3">
                <div className="field">
                    <label className="label is-size-3">Qué necesitas?</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Qué necesitas?" />
                    </div>
                </div>

            </div>
            <div className="column is-3">
                <div className="field">
                    <label className="label is-size-3">Dónde?</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Dónde?" />
                    </div>
                </div>
            </div>
        </div>
    );
}
