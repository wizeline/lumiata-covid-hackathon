import React, { useState } from 'react';
import cx from 'classnames';

export const Navbar: React.FC<{}> = () => {
    const [isActive, toggleActive] = useState(false);

    return (
        <>
            <nav className="navbar main-navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="/icons/Logo.png" alt="comunidad"/>
                        <span className="has-text-info is-size-3" style={{marginLeft: '8px'}}>Comunidad</span>
                    </a>

                    <a
                        role="button"
                        className={cx("navbar-burger burger", {"is-active": isActive})}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navigation-bar"
                        onClick={() => toggleActive(!isActive)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navigation-bar" className={cx("navbar-menu", {"is-active": isActive})}>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button">
                                    <strong>Login</strong>
                                </a>
                                <a className="button is-info">
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="box is-shadowless" style={{padding: 0}}>
                <progress className="progress is-info is-small" value="100" max="100">45%</progress>
            </div>
        </>
    );
};
