"use client"

import { useEffect, useState } from "react"

export default function page() {
    const [users, setUses] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUses(data)
        }
        getData();
        
    },[])
  return (
    <div>
        <div className='font-bold text-xl p-3'>Danh sách Người dùng </div>
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
