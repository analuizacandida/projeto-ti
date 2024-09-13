import React, { useState } from 'react';
import imagem from '../assets/logo-salao.png'; // A logo do salão
import '../styles/Login.css'; // Importa o CSS do Login
const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Para alternar a visibilidade da senha

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onLogin(name);
    }
  };

  return (
    <div className="login-form">
      <div className="login-header-logo">
        <img src={imagem} alt="logo do salão" />
      </div>
      <h2 className="login-form-title">Studio Beauty</h2>
      <form className="login-form-form" onSubmit={handleSubmit}>
        <div style={{ position: 'relative' }}>
          <input
            className="login-form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Email"
            required
          />
          <i className="input-icon fas fa-envelope"></i>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            className="login-form-input"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Senha"
            required
          />
          <i className="input-icon fas fa-lock"></i>
          <i
            className="login-form-input-icon fas fa-eye"
            onClick={() => setPasswordVisible(!passwordVisible)}
          ></i>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            Eu li e aceito os <a href="#">termos de uso</a>
          </label>
        </div>
        <div className="buttons-container">
          <button className="login-form-button" type="submit">Entrar</button>
          <button className="login-form-button">Criar Conta</button>
        </div>
        <p><a href="#">Esqueci minha senha</a></p>
      </form>
    </div>
  );
};

export default Login;