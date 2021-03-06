import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormMadeTO from './formAddTo'
import { onSetListTO } from '../../redux/allTOAC'
//types:
import { AppStateType } from '../../redux/store'
import { AddTOStateType, AddTOTypes, FormAddUsesDataType } from '../../types/AddTOTypes';

const CreateMadeTO: React.FC<AddTOTypes> = props => {

  const history = useHistory()
  
  useEffect(() => {
    if (props.logined !== true) history.push('/login')
  }, [])
  
  const onSubmit = (dataForm: FormAddUsesDataType): void => {
    props.onSetListTO(dataForm)
    history.push('/made-to')
  }
  
  return (
    <div className="container">
        <FormMadeTO onSubmit={onSubmit} />
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