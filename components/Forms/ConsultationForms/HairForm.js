/* The consultation is not handled by an appointment, but instead simply via form! */

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function HairForm() {
  const [question, setQuestion] = useState(1);
  const { handleSubmit, register, errors, watch } = useForm();

  const onSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id='question-1' className='form-item-wrp'>
        <label>What was your sex at birth?</label>
        <input name='Gender' type='radio' value='male' ref={register} />
        <input name='Gender' type='radio' value=' female' ref={register} />
      </div>
      <div id='question-2' className='form-item-wrp'>
        <label>What is your date of birth?</label>
        INSERT DATEPICKER
      </div>
    </form>
  );
}
