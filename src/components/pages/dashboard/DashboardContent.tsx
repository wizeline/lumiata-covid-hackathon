import React, { useState } from 'react';
import cx from 'classnames';
import { SearchBar } from './SearchBars';
import CommunityReviews from '../common/reviews/CommunityReviews';
import data from '../../../datastore/landing_page.json';
import jobs from '../../../datastore/restaurants_view.json';
import availableServices from '../../../datastore/services_view.json';
import { MapResults } from './MapResults';

const steps = [
    {
        key: 'first',
        icon: '/icons/LandingPage/store-icon.png',
        text: 'Choose the category that fits you the best',
    },
    {
        key: 'second',
        icon: '/icons/LandingPage/mac-icon.png',
        text: 'Contact the person that offered the job or service',
    },
    {
        key: 'third',
        icon: '/icons/LandingPage/clap-hands.png',
        text: 'Get what you were looking for while helping the community',
    },
];

const SectionTitle: React.FC<{}> = ({children}) => (
    <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-11">
            <p className="title is-2">
                {children}
            </p>

        </div>
    </div>
);

const searchMap = {
    'servicios': availableServices.restaurants,
    'empleos': jobs.restaurants
};

const isActive = (selection: string | null, key: string) => selection && selection === key;

const DashboardContent = () => {
    const [selectedCategory, setCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSubcategory] = useState<string | null>(null);
    // @ts-ignore
    const searchResults = searchMap[selectedCategory] || [];

    const updateSubcategory = (name: string) => {
        window.scrollTo(0, 0);
        setSubcategory(name);
    };

    return (
        <>
            <SearchBar />

            {selectedSubcategory && selectedCategory && (
                <div className="section">
                    <MapResults results={searchResults} type={selectedCategory} />
                </div>
            )}

            {!selectedSubcategory && (
                <>
                    <SectionTitle>
                        You can do a more specific search...
                    </SectionTitle>

                    <div className="section">
                        <div className="columns">
                            <div className="column is-3 is-offset-3">
                                <div className={cx("box is-shadowless is-pulled-right option-type", {
                                        active: isActive(selectedCategory, 'empleos'),
                                })}>
                                    <figure className="image is-128x128" onClick={() => setCategory('empleos')}>
                                        <img className="is-rounded" src="/icons/LandingPage/store-icon.png" />
                                    </figure>
                                    <br/>
                                    <h4 className="subtitle is-6">
                                        Search a job
                                    </h4>
                                </div>
                            </div>
                            <div className="column is-3">
                                <div className={cx("box is-shadowless option-type", {
                                        active: isActive(selectedCategory, 'servicios'),
                                })}>
                                    <figure className="image is-128x128" onClick={() => setCategory('servicios')}>
                                        <img className="is-rounded" src="/icons/LandingPage/tools-icon.png" />
                                    </figure>
                                    <br/>
                                    <h4 className="subtitle is-6">
                                        Search a service
                                    </h4>
                                </div>
                            </div>
                            <div className="column is-3"></div>
                        </div>
                    </div>
                </>
            )}

            {!selectedCategory && (
                <>
                    <SectionTitle>
                        <br/>
                        Now more than ever, <br/>
                        it's to make our community stronger. <br/>
                        Take a look how:
                        <br/>
                        <br/>
                    </SectionTitle>

                    <div className="hero is-custom">
                        <div className="hero-body">
                            <div className="section">
                                <div className="tile is-ancestor">
                                    {steps.map((step, index) => (
                                        <div key="step.key" className="tile is-parent">
                                            <div className="box">
                                                <div className="has-text-centered box is-shadowless container">
                                                    <span className="is-3 title has-text-info step-number is-rounded">{index + 1}</span>
                                                </div>
                                                <figure className="image container is-96x96">
                                                    <img className="is-rounded" src={step.icon || ''} />
                                                </figure>
                                                <div className="box is-shadowless step-description">
                                                    <p className="subtitle is-4" style={{textAlign: 'center'}}>{step.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {selectedCategory && (
                <>
                    <SectionTitle>
                        <br/>
                        {selectedCategory === 'servicios'? 'Services': 'Jobs'} categories
                    </SectionTitle>

                    <div className="hero is-custom">
                        <div className="hero-body">
                            <div className="section">
                                <div className="columns">
                                    <div className="column is-1"></div>
                                    {data.categories.map((category, index) => (
                                        <div key={category.name} className="column is-2">
                                            <div className="box is-shadowless category-option has-background-custom">
                                                <figure
                                                    className="image container is-128x128"
                                                    onClick={() => updateSubcategory(category.name)}>
                                                    <img className="is-rounded" src={category.icon} />
                                                </figure>
                                                <p className="subtitle is-4 has-text-centered category-label">
                                                    {category.name}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {!selectedSubcategory && (
                <>
                    <SectionTitle>
                        <br/>
                        Get to know your community<br/>
                        through some of their comments<br/>
                        <br/>
                    </SectionTitle>

                    <CommunityReviews />
                </>
            )}

        </>
    );
};

export default DashboardContent;
