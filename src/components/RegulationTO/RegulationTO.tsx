import React from 'react'
import './RegulationTO.scss'
//types:
import { RegTOContainerProps } from '../../types/RegulationTOTypes'

const RegulationTO: React.FC<RegTOContainerProps> = props => {
  return (
    <div className="row list-to">
      <div className="col-6 title-all">
        {props.title}
      </div>
      <div className="col-6 text-all">
        {
          props.text
            .split('. ')
              .map(e => <p>{e}</p> )
        }
      </div>
    </div>

  )
}

export default RegulationTO