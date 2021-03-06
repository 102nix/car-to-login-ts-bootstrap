import React from 'react';
import './formAddTo.scss';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FieldOfForm } from '../../FormControls/Input';
import { required } from '../../Validators/validate';
import { useHistory } from 'react-router-dom';
import { FormAddContainerType, FormAddUsesDataType } from '../../types/AddTOTypes';

const FormMadeTOContainer: React.FC<InjectedFormProps<FormAddUsesDataType, FormAddContainerType> & FormAddContainerType> = ({handleSubmit, ...props}) => {
  
  const history = useHistory()

  return (
    <div className="add-content">
      <div className="title-add-content">Добавить ТО:</div>
      <form onSubmit={handleSubmit}>
        <div className="from-group">
          <Field
            placeholder="Пробег и дата" 
            name="titleTo" 
            component={FieldOfForm} 
            validate={[required]} 
            className="form-control" 
          />
        </div>
        <div className="from-group">
          <Field 
            placeholder="Регламентные работы и стоимость" 
            name="textTo" 
            component={FieldOfForm} 
            validate={[required]} 
            className="form-control"
            id="text" 
          />
        </div>
        <div className="from-group">
          <Field 
            placeholder="Стоимость комплектующих" 
            name="priceTo" 
            component={FieldOfForm} 
            validate={[required]} 
            className="form-control"
            id="price"
          />
        </div>
        <div className="add-action">
          <button className="btn btn-success">Сохранить</button>
          <button className="btn btn-danger" onClick={() => {history.push('/')}}>Отмена</button>
        </div>
      </form>
    </div>
  )
  
}
const FormMadeTO = reduxForm<FormAddUsesDataType, FormAddContainerType>({form: 'MadeTO'})(FormMadeTOContainer)
export default FormMadeTO 
