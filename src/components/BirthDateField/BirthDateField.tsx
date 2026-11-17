'use client';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BirthDateField.css';

interface CalendarProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  error: string;
}

function BirthDateField({ value, onChange, error }: CalendarProps) {
  return (
    <div className='form-field'>
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
        className={
          error
            ? 'auth-form__input--error auth-form__input'
            : 'auth-form__input'
        }
      />
      {error && <p className='form-field__error'>{error}</p>}
    </div>
  );
}

export default BirthDateField;
