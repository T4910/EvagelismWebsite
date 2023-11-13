// components/DateForm.js
'use client'
import React, { useState } from 'react';

const DateForm = () => {
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const days = Array.from({ length: 31 }, (_, index) => {
    const day = (index + 1).toString().padStart(2, '0');
    return { value: day, label: day };
  });

  return (
    <>
      <label htmlFor="monthSelect">Select Month:</label>
      <select id="monthSelect" name="month">
        <option value="" disabled>
          Select Month
        </option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>

      <label htmlFor="daySelect">Select Day:</label>
      <select id="daySelect" name="day">
        <option value="" disabled>
          Select Day
        </option>
        {days.map((day) => (
          <option key={day.value} value={day.value}>
            {day.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default DateForm;
