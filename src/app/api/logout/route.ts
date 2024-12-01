import { NextResponse } from "next/server"

export const POST = async ()=>{
    const res = NextResponse.json({
        code:0,
        msg:'退出成功'
    })
    res.cookies.set('token','',{
        maxAge:0,
        path:'/'
    })
    return res
}