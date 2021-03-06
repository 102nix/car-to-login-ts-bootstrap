import React from 'react'
import { useHistory } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import './FormRegister.scss';
import { FieldOfLogin } from '../../FormControls/Input'
import { required, confirmPass } from '../../Validators/validate'
//types:
import { RegisterFormContainerType, RegisterFormUsesData } from '../../types/RegisterType';

const FormReg: React.FC<InjectedFormProps<RegisterFormUsesData, RegisterFormContainerType> & RegisterFormContainerType> = ({handleSubmit, ...props}) => {
  
  const history = useHistory()

  return (
    <div className="container">
      <div className="reg-content">
        <div className="row">
          <p className="col-12 text-center title-reg">Регистрация:</p>
        </div>
        <div className="row">
          <form className="col-8 reg-form" onSubmit={handleSubmit}>
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
            <div className="from-group">
              <Field 
                type="password"
                placeholder="Confirm password" 
                name="confirmpassword" 
                component={FieldOfLogin} 
                validate={[confirmPass]} 
                className="form-control"
              />
            </div>
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
          </form>
        </div>
      </div>
    </div>
  )
  
}
const FormRegister = reduxForm<RegisterFormUsesData, RegisterFormContainerType>({form: 'Register-form'})(FormReg)
export default FormRegister 