import React from 'react'
import tigerSrc from '/public/tiger.png'
import Content from '@/components/content'
import{Metadata} from 'next'
export const metadata:Metadata = {
	title:'Performance'
  }
export default function Performance() {
  return (
    <div className='text-white h-full bg-red-400'>
        <h1 className='text-2xl font-bold'>Performance</h1>
        <Content imgUrl={tigerSrc}/>
    </div>
  )
}
