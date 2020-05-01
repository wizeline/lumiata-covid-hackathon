import React, { useState } from 'react';
import cx from 'classnames';
import { SearchBar } from './SearchBars';
import CommunityReviews from '../common/reviews/CommunityReviews';
import data from '../../../datastore/landing_page.json';
import restaurants from '../../../datastore/restaurants_view.json';
import { MapResults } from './MapResults';

const steps = [
    {
        key: 'first',
        icon: '/icons/LandingPage/store-icon.png',
        text: 'Selecciona la categoria que mejor se adapte a lo que necesitas ahora',
    },
    {
        key: 'second',
        icon: '/icons/LandingPage/mac-icon.png',
        text: 'Conecta con el empleo o servicio',
    },
    {
        key: 'third',
        icon: '/icons/LandingPage/clap-hands.png',
        text: 'Cubre lo que necesitas, mientras apoyas a tu comunidad mas cercana',
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
    'servicios': restaurants.restaurants,
    'empleos': []
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
                    <MapResults results={searchResults} />
                </div>
            )}

            {!selectedSubcategory && (
                <>
                    <SectionTitle>
                        También puedes buscar algo más especifico...
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
                                        Buscar un empleo
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
                                        Buscar un servicio
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
                        Ahora, más que nunca, <br/>
                        aydemos a fortalcecer nuestra comunidad. <br/>
                        Descubre cómo:
                        <br/>
                        <br/>
                    </SectionTitle>

                    <div className="hero is-light">
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
                                                    <p className="subtitle is-4">{step.text}</p>
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
                        Categoria de {selectedCategory}
                    </SectionTitle>

                    <div className="hero is-light">
                        <div className="hero-body">
                            <div className="section">
                                <div className="columns">
                                    <div className="column is-1"></div>
                                    {data.categories.map((category, index) => (
                                        <div key={category.name} className="column is-2">
                                            <div className="box is-shadowless category-option has-background-white-ter">
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
                        Conoce los comentarios<br/>
                        de las personas en tu comunidad<br/>
                        <br/>
                    </SectionTitle>

                    <CommunityReviews />
                </>
            )}

        </>
    );
};

export default DashboardContent;
