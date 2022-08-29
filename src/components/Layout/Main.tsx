import React from 'react';

export default function Main({ children }: { children: React.ReactNode }) {
  return <main className='mx-auto px-4 sm:max-w-2xl'>{children}</main>;
}
