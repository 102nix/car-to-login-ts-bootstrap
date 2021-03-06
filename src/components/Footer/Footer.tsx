import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import email from '../../imgs/email2.png';
import calendar from '../../imgs/calendar2.png'
import info from '../../imgs/info.png'

const Footer: React.FC = () => {

  return (
    <div className="container">
      <div className="footer">
        <div className="row">
        <div className="col-12 footer-content">
          <div className="footer-info">
            <NavLink to="/calendar" className="nav-link">
              <img src={calendar} width="45px" height="45px" alt="См календарь"/> 
            </NavLink>
            <a href="mailto:zalilov@list.ru?subject=Обращения с сайта" className="nav-link">
              <img src={email} width="45px" height="45px" alt="Отправить email"/> 
            </a>
            <NavLink to="/info" className="nav-link">
              <img src={info} width="45px" height="45px" alt="Информация о проекте"/> 
            </NavLink>
          </div>
          <div className="copyright-container">
            © 2021 Copyright
          </div>
          </div>
        </div>
        </div>
      </div>
  )
}
export default Footer