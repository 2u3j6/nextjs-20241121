import React from 'react'
import Image,{StaticImageData} from 'next/image'
interface IProps  {
    imgUrl:StaticImageData
}
export default function Page(props:IProps) {
  return (
    <div className='text-white'>
      <div className='absolute inset-0'>
        <Image src={props.imgUrl} alt='cat' fill style={{objectFit:'cover'}}/>
        <div className='absolute inset-0 bg-gradient-to-r from-black'></div>

      </div>


    </div>
  )
}
