import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormRegister from './FormRegister'
//reducer & AC:
import { setLoader, onRegistered } from '../../redux/loginAC'
//types:
import { AppStateType } from '../../redux/store'
import { RegisterFormUsesData, RegisterStateType, RegisterTypes } from '../../types/RegisterType';

const Register: React.FC<RegisterTypes> = props => {

  const history = useHistory()
  
  const onSubmit = (dataForm: RegisterFormUsesData): void => {
    props.onRegistered(dataForm)
    props.setLoader(true)
  }

  const onLocalStorage = () => {
    history.push('/login')
  }
  
  return (
    <>
    { 
      props.registered !== true || props.registered === null ?
        <FormRegister
          onSubmit={onSubmit} 
          load={props.load}
        />
      :
      onLocalStorage()
    }
    {
      props.registered === false &&
      <div className="error-reg">Ошибка регистрации!</div>
    }
    </>
  )
}

const mapStateToProps = (state: AppStateType): RegisterStateType => {
  return {
    registered: state.loginReducer.registered,
    load: state.loginReducer.load
  }
}

const connector = connect(mapStateToProps, { onRegistered, setLoader })
export default connector(Register)
