import React from 'react';

export const Footer = () => {
    return (
        <>
            <div className="box is-shadowless is-marginless">
                <progress className="progress is-info is-small" value="100" max="100">45%</progress>
            </div>
            <footer className="footer">
                <div className="columns">
                    <div className="column">
                        <ul>
                            <li>Contacto</li>
                            <br/>
                            <li>Acerca de nosotros</li>
                            <br/>
                            <li>Politicas de privacidad</li>
                        </ul>
                    </div>
                    <div className="column">
                        <p className="is-pulled-right">
                            2020. Powered by Wizeline + Lumiata
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
