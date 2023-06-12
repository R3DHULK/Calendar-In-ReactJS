import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthName = (date) => {
    return date.toLocaleString('default', { month: 'long' });
  };

  const getMonthDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(year, month, i);
      days.push(currentDate);
    }

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.unshift(null);
    }

    return days;
  };

  const prevMonth = () => {
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(prevMonthDate);
  };

  const nextMonth = () => {
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextMonthDate);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&#8249;</button>
        <h2>{getMonthName(currentDate)}</h2>
        <button onClick={nextMonth}>&#8250;</button>
      </div>
      <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
      </div>
      <div className="dates">
        {getMonthDays(currentDate).map((day, index) => (
          <div className="date" key={index}>
            {day && <span>{day.getDate()}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
