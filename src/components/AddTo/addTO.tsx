import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './addTo.scss'
import { onSetListTO } from '../../redux/allTOAC'
//types:
import { AppStateType } from '../../redux/store'
import { AddTOStateType, AddTOTypes, FormAddUsesDataType } from '../../types/AddTOTypes';
import { InputComponent } from '../Inputs/InpuntComponent'
import { TextareaComponent } from '../Inputs/TextareaComponent'

const CreateMadeTO: React.FC<AddTOTypes> = props => {

  const history = useHistory()
  
  useEffect(() => {
    if (props.logined !== true) history.push('/login')
  }, [])
  
  return (
    <div className="container">
      <div className="add-content">
        <div className="row">
          <div className="col-12 title-add-content">
            Добавить ТО:
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Formik
              initialValues={{
                titleTo: '',
                textTo: '',
                priceTo: ''
              }}
              validationSchema={Yup.object({
                titleTo: Yup.string().required('Required'), 
                textTo: Yup.string().required('Required'),
                priceTo: Yup.string().required('Required') 
              })}
              onSubmit={
                (dataForm: FormAddUsesDataType): void => {
                  props.onSetListTO(dataForm)
                  history.push('/made-to')
                }
              }
            >
              <Form>
                <InputComponent
                  placeholder="Пробег и дата"
                  id="titleTo"
                  name="titleTo"
                  type="text" 
                />
                <TextareaComponent
                  placeholder="Регламентные работы и стоимость"
                  id="text"
                  name="textTo"
                />
                <TextareaComponent
                  placeholder="Стоимость комплектующих"
                  id="price"
                  name="priceTo"
                />
                <div className="add-action">
                  <button className="btn btn-success">Сохранить</button>
                  <button className="btn btn-danger" onClick={() => {history.push('/')}}>Отмена</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

let mapStateToprops = (state: AppStateType): AddTOStateType => {
  return{
    logined: state.loginReducer.logined
  }
}

const connector = connect(mapStateToprops, { onSetListTO })
export default connector(CreateMadeTO)