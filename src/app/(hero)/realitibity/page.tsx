import React from 'react'
import catSrc from '/public/cat.png'
import Content from '@/components/content'
import{Metadata} from 'next'
export const metadata:Metadata = {
	title:'Realitibity'
  }
export default function Page() {
  return (
    <Content imgUrl={catSrc}/>
  )
}
