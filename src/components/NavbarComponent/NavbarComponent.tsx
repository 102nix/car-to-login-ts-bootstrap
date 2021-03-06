import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import './NavbarComponent.scss'
import { setLogin } from '../../redux/loginAC'
//types:
import { AppStateType } from '../../redux/store'
import { NavbarStateType, NavbarTypes } from '../../types/NavbarTypes'

const NavbarComponent: React.FC<NavbarTypes> = props => {

  const history = useHistory()

  const onExit = () => {
    delete localStorage.regLogin
    props.setLogin(null)
    history.push('/register')
  }

  useEffect(() => {
    if (localStorage.getItem('regLogin')) props.setLogin(true)
  }, [])

  return (
    <div className="container">
      <Navbar expand="lg" variant="dark" className="navbarBG">
        <Navbar.Brand><NavLink to="/" className="nav-link">Nissan Qashqai</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-toggle" />
        <Navbar.Collapse id="basic-toggle">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/regulation-to" className="nav-link">ТО по регламенту</NavLink>
            </li>
            <li className="nav-item">
              { 
                props.logined === true &&
                <NavLink to="/made-to" className="nav-link">Сделанные ТО</NavLink>
              }
            </li>
            <li>
              { 
                props.logined === true &&
                <NavLink to="/add-to" className="nav-link">Добавить ТО</NavLink>
              }
            </li>
            <li>
              {
                props.logined === true &&
                <button className="btn nav-link" onClick={onExit}>Выйти</button>
              }
              {
                (props.logined === false || props.logined === null) &&
                <NavLink to='/login' className="nav-link">Login</NavLink>
              }
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): NavbarStateType => {
  return {
    logined: state.loginReducer.logined
  }
}
const connector = connect(mapStateToProps, { setLogin })
export default connector(NavbarComponent)
