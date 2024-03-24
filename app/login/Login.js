'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Login = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <section id='login-section'>
      <h1>Login Component</h1>
    </section>
  );
};

export default Login;
