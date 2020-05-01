import React from 'react';

export const Navbar: React.FC<{}> = () => {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="/icons/Logo.png" alt="comunidad"/>
                        <span className="has-text-info is-size-5" style={{marginLeft: '8px'}}>Comunidad</span>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navigation-bar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navigation-bar" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button">
                                    <strong>Iniciar Session</strong>
                                </a>
                                <a className="button is-info">
                                    Registrarme
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="box is-shadowless">
                <progress className="progress is-info is-small" value="100" max="100">45%</progress>
            </div>
        </>
    );
};
