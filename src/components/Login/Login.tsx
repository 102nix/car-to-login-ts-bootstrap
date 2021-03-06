import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormLogin from './FormLogin'
//reducer & AC:
import { setLoader, onLogined } from '../../redux/loginAC'
//types:
import { AppStateType } from '../../redux/store';
import { LoginDispatcType, LoginFormDataType, LoginStateType } from '../../types/LoginTypes';

const Login: React.FC<LoginStateType & LoginDispatcType> = props => {

  const history = useHistory()
  
  const onSubmit = (dataForm: LoginFormDataType): void => {
    props.setLoader(true) 
    props.onLogined(dataForm)
  }

  const onLocalStorage = () => {
    localStorage.setItem('regLogin', 'logined')
    history.push('/')
  }
  
  return (
    <>
    { 
      props.logined !== true || props.logined === null ?
        <FormLogin
          onSubmit={onSubmit}
          load={props.load}
        />
      :
      onLocalStorage()
    }
    {
      props.logined === false &&
      <div className="error-reg">Неверный Login или password!</div>
    }
    </>
  )
}

const mapStateToProps = (state: AppStateType): LoginStateType => {
  return {
    logined: state.loginReducer.logined,
    load: state.loginReducer.load
  }
}

const connector = connect(mapStateToProps, { onLogined, setLoader })
export default connector(Login)
