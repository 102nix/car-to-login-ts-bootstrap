import React from 'react'
import { useHistory } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import './FormLogin.scss'
import { FieldOfLogin } from '../../FormControls/Input'
import { required } from '../../Validators/validate'
//types:
import { LoginFormContainerType, LoginFormDataType } from '../../types/LoginTypes'

const FormLog: React.FC<InjectedFormProps<LoginFormDataType, LoginFormContainerType> & LoginFormContainerType> = ({handleSubmit, ...props}) => {
  
  const history = useHistory()

  return (
    <div className="container">
      <div className="log-content">
        <div className="row">
          <div className="col-12 text-center title-log">Login:</div>
          <form className="col-8 log-form" onSubmit={handleSubmit}>
            <div className="from-group">
              <Field
                type="email"
                placeholder="Email" 
                name="email" 
                component={FieldOfLogin} 
                validate={[required]} 
                className="form-control" 
              />
            </div>
            <div className="from-group">
              <Field 
                type="password"
                placeholder="Password" 
                name="password" 
                component={FieldOfLogin} 
                validate={[required]} 
                className="form-control"
              />
            </div>
            <div className="add-action">
              {
                !props.load &&
                <button className="btn btn-success">
                  Login
                </button>
              }
              { 
                props.load &&
                <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Logining...
                </button>
              } 
              <button className="btn btn-access have-login" onClick={() => history.push('/register')}>Нет Login'а?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
const FormLogin = reduxForm<LoginFormDataType, LoginFormContainerType>({form: 'Login-form'})(FormLog)
export default FormLogin 