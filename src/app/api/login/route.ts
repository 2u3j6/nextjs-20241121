import { NextRequest, NextResponse } from "next/server";

export const POST = async (request:NextRequest)=>{
    const {username:login,password} =await request.json()
    console.log(login,password);
    // 调用接口
    const r = await fetch('https://api.zhihur.com/admin/auth/sign_in',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            login,
            password
        })
    })
    const res =await r.json()
    // return NextResponse.json({
    //     code:0,
    // },{
    //     headers:{
    //         'Set-Cookie':`token=${res.data.token}; path=/; max-age=60*60*24 HttpOnly`
    //     }
    // })
    // 第二种写法
    const response = NextResponse.json({
        code:0
    })
    response.cookies.set('token',res.data.token,{
        maxAge:60*60*24,
        path:'/'
    })

    return response

}