import React from 'react'

export default function layout({children}:Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <div className='w-1/2 mx-auto'>{children}</div>
  )
}
