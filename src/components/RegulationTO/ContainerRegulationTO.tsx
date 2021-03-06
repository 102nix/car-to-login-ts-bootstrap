import React from 'react'
import { connect } from 'react-redux'
import './ContainerRegulationTO.scss';
import { onGetListTO, setCurrentPage, reFresh } from '../../redux/allTOAC'
import Loader from '../Loader/Loader';
import RegulationTO from './RegulationTO'
//types:
import { AppStateType } from '../../redux/store'
import { ContainerRegTOStateType, ContainerRegTOTypes } from '../../types/RegulationTOTypes';

const ContainerRegulationTO: React.FC<ContainerRegTOTypes> = props => {

  const URL_LIST: string = 'https://car-to.firebaseio.com/.json'

  if (props.TOList === null) props.onGetListTO(URL_LIST)
  if (props.currentPage === undefined || props.start === undefined || props.end === undefined) props.reFresh()

  /////Pagination/////

  const pages: Array<number> = []

  if (props.TOList !== null) {
    const pageSize: number = 3
    const pageCount: number = Math.ceil(props.TOList.length / pageSize)
    for (let i = 1; i < pageCount; i++) {
      pages.push(i)
    }
  }

  const doPaginate = (val: Array<number>) => {
    const dataPaginat = {
      currentPage: (props.currentPage + val[0]), // props.currentPage -/+ 1
      start: (props.start + val[1]),
      end: (props.end + val[1])
    }
    props.setCurrentPage(dataPaginat)
  }

  /////Pagination/////

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          {
            props.currentPage !== 1 &&
            <small className="goto-back-forward" onClick={() => doPaginate([-1, -2])}>&#171;</small>
          }
          {
            props.currentPage <= pages.length &&
            <small className="goto-back-forward" onClick={() => doPaginate([+1, +2])}>&#187;</small>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-12 loader-container">
          {
            props.TOList === null &&
            <div className="loader"><Loader /></div>
          }
        </div>
      </div>
      {
        props.TOList !== null && props.TOList.length !== 0
          ?
          <>  
            <div className="row text-center">
              <div className="col-12 title-regulation-to">ТО по регламенту:</div>
            </div>
            {
              props.TOList
                .slice(props.start, props.end)
                  .map(list => (<RegulationTO
                      key={list.id}
                      title={list.titleTo}
                      text={list.textTo}
                    />)
                  )
            }
          </>
          : <div className="list-empty">
              <p>Список пуст</p>
            </div>
      }
    </div>
  )
}

const mapStateToProps = (state: AppStateType): ContainerRegTOStateType => {
  return {
    TOList: state.allToReducer.TOList, 
    currentPage: state.allToReducer.currentPage,
    start: state.allToReducer.start,
    end: state.allToReducer.end
  }
}
const connector = connect(mapStateToProps, { onGetListTO, setCurrentPage, reFresh }) 
export default connector(ContainerRegulationTO)