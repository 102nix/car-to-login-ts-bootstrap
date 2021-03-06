import React from 'react'
import './MadeTo.scss'
// types:
import { MadeContainerProps } from '../../types/MadeTOTypes';

export const MadeTo: React.FC<MadeContainerProps> = props => {
  return (
    <div 
      className="row list-made-to" 
      onClick={() => props.editTO({
        id: props.id, 
        titleTo: 
        props.titleTo, 
        textTo: props.textTo, 
        priceTo: props.priceTo})}
    >
      <div className="col-12 col-md-2">
        <div className="title-made">
          {
            props.titleTo
              .split(';')
                .map((e, i) => {
                  if (i === 0) return <p key={i} className="odometr">{e}</p>
                  return <p key={i} className="data">{e}</p>
                })
          }
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="text-made">
          {
            props.textTo
              .split(';')
                .map(e => <p key={e}>{e}</p>)
          }
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="price-made">
          { 
            props.priceTo !== undefined 
              ? props.priceTo
                  .split(';')
                    .map(e => <p key={e}>{e}</p>)
              : null
          }
        </div>
      </div>
  </div>
  )
}

export default MadeTo