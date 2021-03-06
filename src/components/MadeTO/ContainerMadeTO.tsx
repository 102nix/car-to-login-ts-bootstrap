import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import './CntainerMadeTo.scss'
import { 
  onGetListTO, 
  onUpdateListTO, 
  setCurrentPage, 
  reFresh, 
  editDataModal, 
  rechartsAC, 
  setModal } from '../../redux/allTOAC'
import { ModalEdit } from '../ModalEdit/ModalEdit'
import MadeTo from './MadeTo'
import Loader from '../Loader/Loader'
//types:
import { AppStateType } from '../../redux/store'
import { ContainerMadeTOStateType, MadeTOTypes } from '../../types/MadeTOTypes';
import { EditDataType } from '../../types/AllTOStoreType'

const ContainerMadeTO: React.FC<MadeTOTypes> = props => {

  const URL_LIST: string = 'https://made-car-to.firebaseio.com/.json'
  const history = useHistory()

  useEffect(() => {
    if (props.logined !== true) history.push('/login')
  }, [])

  if (props.TOList === null) props.onGetListTO(URL_LIST)
  if ( props.currentPage === undefined || props.start === undefined || props.end === undefined ) props.reFresh()

  /////Pagination/////
  let pages: Array<number> = []

  if (props.TOList !== null) {
    const pageSize = 4
    const pageCount = Math.ceil(props.TOList.length / pageSize)

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
  }

  const doPaginate = (val: Array<number>) => {
    const dataPaginat = {
      currentPage: (props.currentPage + val[0]),
      start: (props.start + val[1]),
      end: (props.end + val[1])
    }
    props.setCurrentPage(dataPaginat)
  }

 /////Pagination/////

 const editTO = (val: EditDataType) => {
  props.editDataModal(val)
}

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          { 
            props.currentPage !== 1 &&
            <small className="goto-back-forward" onClick={() => doPaginate([-1, -3])}>&#171;</small>
          }
          {
            props.currentPage <= pages.length &&
            <small className="goto-back-forward" onClick={() => doPaginate([1, 3])}>&#187;</small>
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
          ? <>
              {
                props.editData !== null &&
                <ModalEdit
                  titleTo={props.editData.titleTo}
                  textTo={props.editData.textTo}
                  priceTo={props.editData.priceTo}
                  id={props.editData.id}
                  url={URL_LIST}
                  showModal={props.showModal}
                  setModal={props.setModal}
                  onUpdateListTO={props.onUpdateListTO}
                />

              }
              <div className="row text-center">
                <div className="col-12 title-made-to">Сделанные ТО:</div>
              </div>
              {
                props.TOList
                  .slice(props.start, props.end)                 
                    .map(list => (<MadeTo 
                      editTO={editTO}
                      key={list.id}
                      id={list.id}
                      titleTo={list.titleTo}
                      textTo={list.textTo}
                      priceTo={list.priceTo}
                      />)
                    )
                }
                <div className="row text-center">
                  <NavLink to="/recharts" className="link-to-recharts">График расходов</NavLink>
                </div>
           </>
          : 
            <div className="list-empty">
              <p>Список пуст</p>
            </div>
      }
    </div>
  )
}
const mapStateToProps = (state: AppStateType): ContainerMadeTOStateType => {
  return {
    TOList: state.allToReducer.TOList,
    currentPage: state.allToReducer.currentPage,
    start: state.allToReducer.start,
    end: state.allToReducer.end,
    editData: state.allToReducer.editData,
    showModal: state.allToReducer.showModal,
    logined: state.loginReducer.logined
  }
}
const connector = connect(mapStateToProps, { onGetListTO, setCurrentPage, reFresh, editDataModal, rechartsAC, setModal, onUpdateListTO })
export default connector(ContainerMadeTO)