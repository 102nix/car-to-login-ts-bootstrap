import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './ModalEdit.scss'
//types:
import { ModalEditContainerTypes, OnSubmitType } from '../../types/ModalTypes'
import { InputComponent } from '../Inputs/InpuntComponent'
import { TextareaComponent } from '../Inputs/TextareaComponent'

export const ModalEdit: React.FC<ModalEditContainerTypes> = props => {

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  },[])

  const escFunction = (event: KeyboardEvent) => {
    if (event.key === 'Escape') props.setModal(false)
  }

  const handleClose = () => {
    props.setModal(false)
  }

  return(
    <Modal show={props.showModal} onHide={handleClose}>
      <Formik
        initialValues={{
          titleTo: props.titleTo,
          textTo: props.textTo,
          priceTo: props.priceTo
        }}
        validationSchema={Yup.object({
          titleTo: Yup.string().required('Required'), 
          textTo: Yup.string().required(''),
          priceTo: Yup.string().required('Required')
        })}
        onSubmit={
          (dataForm: OnSubmitType): void => {
            dataForm.id = props.id // Расширяется пришедший объект свойством id (id из контейнерных props)
            dataForm.url = props.url // Расширяется пришедший объект свойством url (url из контейнерных props)
            props.onUpdateListTO(dataForm)
            props.setModal(false)
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
          <div className="modal-action">
            <button className="btn btn-success">Сохранить</button>
            <button className="btn btn-danger" onClick={() => props.setModal(false)}>Отменить</button>
          </div>
        </Form>
      </Formik>
    </Modal>
  )
}

