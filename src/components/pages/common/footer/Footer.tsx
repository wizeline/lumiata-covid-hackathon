import React from 'react';

export const Footer = () => {
    return (
        <>
            <div className="box is-shadowless is-marginless">
                <progress className="progress is-info is-small" value="100" max="100">45%</progress>
            </div>
            <footer className="footer is-custom">
                <div className="columns">
                    <div className="column">
                        <ul>
                            <li>Contact</li>
                            <br/>
                            <li>About us</li>
                            <br/>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="footer-companies">
                            <p className="has-text-right">
                                2020. Powered by Wizeline + Lumiata
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
