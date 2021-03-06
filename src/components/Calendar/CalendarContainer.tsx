import React, { useState } from 'react';
import './Calendar.scss';
import { getMonthData } from './GetMonthData';
import Calendar from './Calendar';

const CalendarContainer = () => {

  const baseDate: Date = new Date()

  const months: Array<string> = [
    'Январь', 'Февраля', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]
  const years: Array<number> = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
  ]
  const weekDayNames: Array<string> = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
  ]

  const [date, setDate] = useState<Date>(baseDate)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [monthData, setMonthData] = useState(getMonthData(date.getFullYear(), date.getMonth()))

  const handlePrevMonthButtonClick = () => {
    const prevDate: Date = new Date(date.getFullYear(), date.getMonth() - 1)
    setDate(prevDate)
    setMonthData(getMonthData(prevDate.getFullYear(), prevDate.getMonth()))
  }
  
  const handleNextMonthButtonClick = () => {
    const nextDate: Date = new Date(date.getFullYear(), date.getMonth() + 1)
    setDate(nextDate)
    setMonthData(getMonthData(nextDate.getFullYear(), nextDate.getMonth()))
  }

  const onSelectChange = (year: number, month: number) => {
    const selectDate: Date = new Date(year, month)
    setDate(selectDate)
    setMonthData(getMonthData(selectDate.getFullYear(), selectDate.getMonth()))
  }

  const handleDayClick = (date: Date) => {
    setSelectedDate(date)
  }

  return (
    <Calendar
      baseDate ={baseDate}
      selectedDate = {selectedDate}
      handlePrevMonthButtonClick = {handlePrevMonthButtonClick}
      handleNextMonthButtonClick = {handleNextMonthButtonClick}
      onSelectChange = {onSelectChange}
      date = {date} 
      months = {months}
      years = {years}
      weekDayNames = {weekDayNames}
      monthData = {monthData}
      handleDayClick = {handleDayClick}
    />
  )
}

export default CalendarContainer