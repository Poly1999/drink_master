'use client';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BirthDateField.css';

interface CalendarProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

function BirthDateField({ value, onChange }: CalendarProps) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      placeholderText='mm/dd/yyyy'
      dateFormat='MM/dd/yyyy'
      calendarStartDay={0}
      showMonthDropdown
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={100}
      dropdownMode='scroll'
      maxDate={new Date()}
      popperPlacement='right-start'
      className='auth-form__input'
    ></DatePicker>
  );
}

export default BirthDateField;
