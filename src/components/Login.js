import React, { useState } from "react";
import i18next, { languageResources } from '../i18next';
import { useTranslation } from 'react-i18next';
import './Login.css'; 
import "bootstrap/dist/css/bootstrap.min.css";

export function Login({ setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);

    if (typeof setUser === "function") {
      setUser(name);
    } else {
      console.error("setUser is not a function");
    }
  };

  

  return(
    <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{t('login')}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder={t('username')}
                  />
                  <div style={{ marginBottom: '15px' }} />
                </div >
                <div className="form-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder={t('password')}
                  />
                  <div style={{ marginBottom: '15px' }} />
                </div>
                <button type="submit" className="btn btn-primary">{t('login')}</button>
              </form>
              {error && <p className="text-danger">{t('mandatory_fields')}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )






}
