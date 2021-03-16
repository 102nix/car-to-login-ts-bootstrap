import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './Register.scss'
//reducer & AC:
import { setLoader, onRegistered } from '../../redux/loginAC'
//types:
import { AppStateType } from '../../redux/store'
import { RegisterFormUsesData, RegisterStateType, RegisterTypes } from '../../types/RegisterType';
import { InputComponent } from '../Inputs/InpuntComponent'

const Register: React.FC<RegisterTypes> = props => {

  const history = useHistory()

  const onLocalStorage = () => {
    history.push('/login')
  }

  return (
    <div className="container">
      <div className="reg-content">
        <div className="row">
          <p className="col-12 text-center title-reg">Регистрация:</p>
        </div>
        <div className="row">
          <div className="col-12">
            {
              props.registered !== true || props.registered === null ?
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                    confirmpassword: ''
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email').required('Require'),
                    password: Yup.string().min(6, 'Must have 6 characters').required('Required'),
                    confirmpassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпали')
                  })}
                  onSubmit={
                    (dataForm: RegisterFormUsesData): void => {
                      console.log(dataForm)
                      props.onRegistered(dataForm)
                      props.setLoader(true)
                    }
                  }
                >
                  <Form className="reg-form">
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
                    <InputComponent
                      placeholder="Password confirm"
                      id="confirmpassword"
                      name="confirmpassword"
                      type="password"
                    />
                    <div className="add-action">
                      {
                        !props.load &&
                        <button className="btn btn-success">
                          Register
                        </button>
                      }
                      {
                        props.load &&
                        <button className="btn btn-primary" type="button" disabled>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Registering...
                        </button>
                      }
                      <button className="btn btn-access have-login" onClick={() => history.push('/login')}>Есть Login?</button>
                    </div>
                  </Form>
                </Formik>
                :
                onLocalStorage()
            }
            {
              props.registered === false &&
              <div className="error-reg">Ошибка регистрации!</div>
            }
          </div>
        </div>
      </div>
    </div>
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
