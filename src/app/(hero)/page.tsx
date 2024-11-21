import React from 'react'
import picSrc from '/public/pic.png'
import Content from "@/components/content";
import {Metadata} from "next";
import { Button } from 'antd';
export const metadata:Metadata = {
  title:'Home'
}
export default function Page() {
  return (
    <div className='text-white'>
      <Content imgUrl={picSrc}/>
    </div>
  )
}
