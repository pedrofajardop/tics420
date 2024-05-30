import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import i18next, { languageResources } from '../i18next';
import { useTranslation } from 'react-i18next';
import {Login} from './Login';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">UAI</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{t('welcome')}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('certifications')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">{t('certifications')} 1</a></li>
                                    <li><a className="dropdown-item" href="#">{t('certifications')} 2</a></li>
                                    <li><a className="dropdown-item" href="#">{t('certifications')} 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Login" aria-disabled="true">{t('login')}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder={t('search')} aria-label={t('search')} />
                            <button className="btn btn-outline-light" type="submit">{t('search')}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
