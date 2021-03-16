import React from 'react'
import { useField } from 'formik'
import { Form } from 'react-bootstrap'
import { IValuesInput } from '../../types/InputTypes'

export const InputComponent: React.FC<IValuesInput> = props => {

  const [field, meta] = useField(props)

  return (
    <Form.Group>
      <input
        className="form-control"
        {...props}
        {...field}
      />
      { meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>  
      ): null}
    </Form.Group>
  )
}