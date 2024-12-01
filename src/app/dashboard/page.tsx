"use client"
import React from 'react'
import {Button} from 'antd'
import { useRouter } from 'next/navigation'
export default function Page() {
    const router = useRouter()
    const handlerLogout =async ()=>{
       const res = await fetch('/api/logout',{
            method:'POST'
        })
       const data = await res.json()
       if(data.code ===0){
        router.push('/login')
       }
    }
  return (
    <div className='flex justify-center items-center h-full'>
        <Button type='primary' onClick={handlerLogout}>退出</Button>
    </div>
  )
}
