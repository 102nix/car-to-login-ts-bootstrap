import React, { useEffect } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import './formModal.scss'
import { FieldOfForm } from '../../FormControls/Input'
import { required } from '../../Validators/validate'
//types:
import { FormModalContainerType, FormModalDataUseType } from '../../types/ModalTypes';

const FormModalComponent: React.FC<InjectedFormProps<FormModalDataUseType, FormModalContainerType> & FormModalContainerType> = ({handleSubmit, ...props}) => {
  
  useEffect(() => {
    props.initialize({
      titleTo: props.title,
      textTo: props.text,
      priceTo: props.price
    })
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div className="from-group">
        <label htmlFor="title">Пробег и дата:</label>
        <Field 
          id="title" 
          name="titleTo" 
          component={FieldOfForm} 
          validate={[required]} 
          className="form-control" 
        />
      </div>
      <div className="from-group">
        <label htmlFor="text">Регламентные работы и стоимость:</label>
        <Field 
          id="text" 
          name="textTo" 
          component={FieldOfForm} 
          validate={[required]} 
          className="form-control" 
        />
      </div>
      <div className="from-group">
        <label htmlFor="price">Стоимость комплектующих:</label>
        <Field 
          id="price" 
          name="priceTo" 
          component={FieldOfForm} 
          validate={[required]} 
          className="form-control" />
      </div>
      <div className="modal-action">
        <button className="btn btn-success">Сохранить</button>
        <button className="btn btn-danger" onClick={() => props.setModal(false)}>Отменить</button>
      </div>
    </form>
  )
}

const FormModal = reduxForm<FormModalDataUseType, FormModalContainerType>({form: 'modal-form'})(FormModalComponent)
export default FormModal


