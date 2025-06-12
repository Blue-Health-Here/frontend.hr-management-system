"use client";

import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { Field } from 'formik';
import { useEffect, useRef, useState } from 'react';

const DatePickerField = () => {
  const { RangePicker } = DatePicker;
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const PlaceholderComponent = () => (
    <div 
      ref={containerRef}
      className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white"
      style={{ minWidth: '300px', height: '32px' }}
    >
      <span className="text-gray-400 text-sm flex-1">Start date</span>
      <span className="text-gray-400 mx-2">~</span>
      <span className="text-gray-400 text-sm flex-1">End date</span>
      <div className="w-4 h-4 ml-2">
        <svg viewBox="0 0 1024 1024" className="w-full h-full text-gray-400">
          <path fill="currentColor" d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"/>
        </svg>
      </div>
    </div>
  );

  return (
    <Field name="dateRange">
      {(props: import('formik').FieldProps) => {
        const { field, form, meta } = props;
        
        if (!shouldRender) {
          return <PlaceholderComponent />;
        }

        return (
          <RangePicker
            value={field.value}
            onChange={(dates) => form.setFieldValue(field.name, dates)}
            status={meta.touched && meta.error ? 'error' : ''}
            placeholder={['Start date', 'End date']}
            className='w-full sm:w-60'
            presets={[
              { label: 'Today', value: [dayjs(), dayjs()] },
              { label: 'Yesterday', value: [dayjs().subtract(1, 'day'), dayjs().subtract(1, 'day')] },
              { label: 'Last 7 Days', value: [dayjs().subtract(7, 'day'), dayjs()] },
              { label: 'Last Month', value: [dayjs().subtract(1, 'month'), dayjs()] },
            ]}
          />
        );
      }}
    </Field>
  );
};

export default DatePickerField;