import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { onDataCharting } from '../../redux/allTOAC'
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import './Richarts.scss';
//types:
import { AppStateType } from '../../redux/store';
import { RechartsStateType, RechartsTypes } from '../../types/RechartsTypes';

const Recharts: React.FC<RechartsTypes & RouteComponentProps> = props => {

  const history = useHistory()

  useState(() => {
    if (props.TOList !== null) {
      props.onDataCharting(props.TOList)
    } else {
      history.push('/made-to')
    }
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {
            props.dataRecharts &&
              <div className="richarts">
                <h2 className="title-recharts">График расходов</h2>
                <div className="about-priceProduct">priceProduct-Стоимсоть комплектующих</div>
                <div className="about-priceWork">priceWork-Стоимсоть работ</div>
                <LineChart width={980} height={450} data={props.dataRecharts}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" />
                  <YAxis type="number" domain={[0, 'dataMax + 6700']}  />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="priceProduct" stroke="#0095FF" />
                  <Line type="monotone" dataKey="priceWork" stroke="#FF0000" />
                </LineChart>
              </div>
            }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): RechartsStateType => {
  return{
    TOList: state.allToReducer.TOList,
    dataRecharts: state.allToReducer.dataRecharts
  }
}
const connector = connect(mapStateToProps, { onDataCharting })
export default connector(Recharts)