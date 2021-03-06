import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import FormModal from './FormModal'
//types:
import { ModalEditContainerTypes, OnSubmitType } from '../../types/ModalTypes'

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

  const onSubmit = (dataForm: OnSubmitType): void => {
    dataForm.id = props.id // Расширяется пришедший объект свойством id (id из контейнерных props)
    dataForm.url = props.url // Расширяется пришедший объект свойством url (url из контейнерных props)
    props.onUpdateListTO(dataForm)
    props.setModal(false)
  }

  return(
    <Modal show={props.showModal} onHide={handleClose}>
      <FormModal 
        onSubmit={onSubmit} 
        setModal={props.setModal}
        title={props.titleTo} 
        text={props.textTo} 
        price={props.priceTo} 
      />
    </Modal>
  )
}

