import React, { useState } from "react";
import i18next, { languageResources } from '../i18next';
import { useTranslation } from 'react-i18next';
import './Login.css'; 
import "bootstrap/dist/css/bootstrap.min.css";



  test('renders Login form', () => {
    render(<Login setUser={jest.fn()} />);
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
  
  test('handles input changes', () => { //1
    render(<Login setUser={jest.fn()} />);
    const nameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(nameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(nameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('password123');
  }); 
  test('displays error when fields are empty', () => {
    render(<Login setUser={jest.fn()} />);
    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/mandatory_fields/i)).toBeInTheDocument();
  });
  test('calls setUser when form is submitted with valid data', () => {
    const setUserMock = jest.fn();
    render(<Login setUser={setUserMock} />);
    fireEvent.change(screen.getByPlaceholderText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/login/i));
    expect(setUserMock).toHaveBeenCalledWith('testuser');
  });
  

export function Login({ setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || password === "") {
      setError(true);
      //ERROR: Log when the user leaves any mandatory fields empty
      console.error("handleSumit: Mandatory fields are empty")
      return;
    }
    setError(false);

    if (typeof setUser === "function") {
      setUser(name);
      //INFO: Log when a user is successfully set
      console.info("handleSumit: The user ir successfully set")
    } else {
      console.error("setUser is not a function");
    }
    // DEBUG: Log para depurar el estado de las variables name y password 
    console.debug("handleSubmit: name =", name, ", password =", password);
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
                    onChange={(e) => {
                      setName(e.target.value);
                      //DEBUG:Log the updated value of name
                      console.debug("onChange: name =", e.target.value);
                    }}
                    className="form-control"
                    placeholder={t('username')}
                  />
                  <div style={{ marginBottom: '15px' }} />
                </div >
                <div className="form-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      //DEBUG: Log the updated value of password
                      console.debug("onChange: password =", e.target.value);
                    }}
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
