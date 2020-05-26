import React from 'react'

import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logo from '../../assets/LogoB.png'

export default function Register(){  
  
  return(
  
    <div className="register-container">
      <div className="content">
        <section>
          <img className="imgLogo" src={logo} alt="logo" />
        </section>
        
        <form>
        
        <h1>Cadastre-se no You Up</h1>
          <input placeholder="Nickname" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme sua Senha" />

          <button type="submit" className="button">Cadastrar</button>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="lightgrey" />
            Voltar
          </Link>
        </form>
      </div>
    </div>
  )
}