import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import logo from '../../assets/LogoB.png'

export default function Login(){
  return(
    <div className="login-container">
      <section className="form">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
        

        <form>
          <h1 className="titulo">Seja Bem Vindo :)</h1>
          <input className="input" placeholder="Seu Email" />
          <input className="input" placeholder="Sua Senha" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/cadastro">
            <FiLogIn size={16} color="lightgrey" />
            Cadastre-se
          </Link>
        </form>
      </section>
    </div>
  )
}