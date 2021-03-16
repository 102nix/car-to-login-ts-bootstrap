import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './Login.scss'
//reducer & AC:
import { setLoader, onLogined } from '../../redux/loginAC'
//types:
import { AppStateType } from '../../redux/store';
import { LoginDispatcType, LoginFormDataType, LoginStateType } from '../../types/LoginTypes';
import { InputComponent } from '../Inputs/InpuntComponent'

const Login: React.FC<LoginStateType & LoginDispatcType> = props => {

  const history = useHistory()

  const onLocalStorage = () => {
    localStorage.setItem('regLogin', 'logined')
    history.push('/')
  }

  return (
    <div className="container">
      <div className="log-content">
        <div className="row">
          <div className="col-12 text-center title-log">Login:</div>
        </div>
        {props.logined !== true || props.logined === null ?
          <div className="row">
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={Yup.object({
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().min(6, 'Must have 6 characters minimum!').required('Required')
              })}
              onSubmit={
                (dataForm: LoginFormDataType): void => {
                  console.log(dataForm)
                  props.setLoader(true)
                  props.onLogined(dataForm)
                }
              }
            >
              <Form className="log-form">
                <InputComponent
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                />
                <InputComponent
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                />
                <div className="add-action">
                  {
                    !props.load &&
                    <button type="submit" className="btn btn-success">
                      Login
                    </button>
                  }
                  {
                    props.load &&
                    <button className="btn btn-primary" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Loginning...
                    </button>
                  }
                  <button type="button" className="btn btn-access have-login" onClick={() => history.push('/register')}>Нет Login'а?</button>
                </div>
              </Form>
            </Formik>
          </div> : onLocalStorage()
        }
        {
          props.logined === false &&
          <div className="error-reg">Неверный Login или password!</div>
        }
      </div>
    </div>
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
