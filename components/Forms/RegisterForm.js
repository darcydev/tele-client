import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from 'antd';
import styled from 'styled-components';

import { ErrorMessage } from './ErrorMessage';

import { registerUser } from '../../lib/auth';

export const RegisterForm = () => {
  const { handleSubmit, register, errors, control, watch } = useForm();

  const onSubmit = (values) => registerUser(values);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Username'
        name='username'
        ref={register({ required: 'Required' })}
      />
      {errors.username && <ErrorMessage message={errors.username.message} />}
      <input
        type='text'
        placeholder='Email'
        name='email'
        ref={register({
          required: 'Required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
        })}
      />
      {errors.email && <ErrorMessage message={errors.email.message} />}
      <input
        type='text'
        placeholder='First name'
        name='first_name'
        ref={register({ required: 'Required' })}
      />
      {errors.first_name && (
        <ErrorMessage message={errors.first_name.message} />
      )}
      <input
        type='text'
        placeholder='Last name'
        name='last_name'
        ref={register({ required: 'Required' })}
      />
      {errors.last_name && <ErrorMessage message={errors.last_name.message} />}
      <Controller
        as={DatePicker}
        control={control}
        valueName='selected'
        onChange={([selected]) => selected}
        name='DOB'
        className='input'
        placeholderText='Date of birth'
        ref={register({ required: true })}
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        ref={register({
          required: 'Password required',
          minLength: { value: 8, message: 'Minimum 8 characters' },
        })}
      />
      {errors.password && <ErrorMessage message={errors.password.message} />}
      <input
        type='password'
        placeholder='Confirm password'
        name='confirmPassword'
        ref={register({
          validate: (value) =>
            value === watch('password') || "Passwords don't match",
        })}
      />
      {errors.confirmPassword && (
        <ErrorMessage message={errors.confirmPassword.message} />
      )}
      <button type='submit'>Submit</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 20px 0 0 0;
  }

  button {
    background: blue;
  }
`;
