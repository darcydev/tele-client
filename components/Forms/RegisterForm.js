import { useForm } from 'react-hook-form';

import { registerUser } from '../../lib/auth';

export const RegisterForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    const { username, email, password } = values;

    registerUser(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Username'
        name='username'
        ref={register({ required: true })}
      />
      {errors.username && (
        <span className='error-message'>Username required</span>
      )}
      <input
        type='text'
        placeholder='Email'
        name='email'
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <span className='error-message'>Valid email required</span>
      )}
      <input
        type='password'
        placeholder='Password'
        name='password'
        ref={register({ required: true })}
      />
      {errors.password && (
        <span className='error-message'>Password required</span>
      )}
      <button type='submit'>Submit</button>
    </form>
  );
};
