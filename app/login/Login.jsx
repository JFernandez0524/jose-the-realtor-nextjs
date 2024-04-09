'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Login = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <section id='login-section' className='dark:text-white'>
      <h1>Login Component</h1>
      <form action='#' method='post'>
        <div>
          <label htmlFor='userName' className=''>
            Username:
          </label>
          <input type='text' name='userName' id='userName' />
        </div>
        <div>
          <label htmlFor='password'> Password:</label>
          <input type='text' name='password' id='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </section>
  );
};

export default Login;
