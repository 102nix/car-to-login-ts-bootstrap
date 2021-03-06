import React from 'react';
import './Calendar.scss';
import { areEqual } from './GetMonthData';
import classnames from 'classnames';

type ContainerProps = {
  baseDate: Date
  selectedDate: Date | null
  handlePrevMonthButtonClick(): void
  handleNextMonthButtonClick(): void
  onSelectChange(year: number, month: number): void
  date: Date
  months: Array<string>
  years: Array<number>
  weekDayNames: Array<string>
  monthData: any
  handleDayClick(date: Date): void
}

const Calendar: React.FC<ContainerProps> = props => {

  const monthSelect = React.createRef<HTMLSelectElement>()
  const yearSelect = React.createRef<HTMLSelectElement>();
  // monthSelect.current?.value
  const handleSelectChange = () => {
    const year = parseInt((yearSelect.current?.value || ''), 10)
    const month = parseInt((monthSelect.current?.value || ''), 10)
    props.onSelectChange(year, month)
  }
  
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          {
            props.selectedDate && 
            <p className="selected-data-show">Выбранная дата: {props.selectedDate.toLocaleDateString()}</p>
          }
        </div>

          <div className="col-12 header-calendar">
            <button className='btn btn-light' onClick={props.handlePrevMonthButtonClick}>{'<'}</button>
            <select 
              className="select-calendar" 
              ref={monthSelect} 
              onChange={handleSelectChange}
              value={props.date.getMonth()}
            >
              {
                props.months.map((month, i) => {
                return <option key={month} value={i}>{month}</option>
                })
              }
            </select>
              <select
                className="select-calendar" 
                ref={yearSelect} 
                onChange={handleSelectChange}
                value={props.date.getFullYear()}
              >
                {
                  props.years.map(year => {
                    return <option key={year} value={year}>{year}</option>
                  })
                }
              </select>
              <button className='btn btn-light' onClick={props.handleNextMonthButtonClick}>{'>'}</button>
          </div>

        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                {
                  props.weekDayNames.map(day => {
                    return <th key={day}>{day}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              { 
                props.monthData.map((week: Array<Date>, i: number) => {
                  return <tr key={i}>
                    { 
                      week.map((date: Date, i: number) => date ? 
                      <td 
                        key={i} 
                        onClick={() => props.handleDayClick(date)} 
                        className = {classnames('td-date', {
                          'today': areEqual(date, props.baseDate),
                          'selected': areEqual(date, props.selectedDate) 
                        })}
                      >
                        {date.getDate()}
                      </td>
                        :
                          <td key={i} />
                      )}
                  </tr>
                }) 
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Calendar