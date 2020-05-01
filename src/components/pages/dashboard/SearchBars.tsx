import React from 'react';

export const SearchBar = () => {
    return (
        <div className="columns">
            <div className="column is-4 is-offset-2">
                <div className="field">
                    <label className="label is-size-3">What are you looking for?</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="What do you need?" />
                    </div>
                </div>

            </div>
            <div className="column is-4">
                <div className="field">
                    <label className="label is-size-3">Where?</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Location" />
                    </div>
                </div>
            </div>
        </div>
    );
}
