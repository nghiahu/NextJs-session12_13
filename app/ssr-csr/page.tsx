"use client"

import { useEffect, useState } from "react";
export default function page() {
    const [post,setPost] = useState([]);
    const [flag,setFlag] = useState<boolean>(false)
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then (data=>{
        setPost(data)
    })
    .catch(err=>{
        console.log("lỗi",err);  
    }

    )
},[flag])
const handleClick=()=>{
    setFlag(!flag)
}
  return (
    <div className="p-4">
        <div className='font-bold text-xl p-3'>Danh sách Bài viết với Refresh</div>

        <button className="border border-gray-700 p-1 mb-3 font-bold" onClick={handleClick}>Refresh</button>
        {post.map((item: any) => (
            <ul key={item.id}>
                <li className="font-bold">{item.title}</li>
                <li>{item.body.slice(0, 100)}{item.body.length > 100 ? '...' : ''}</li>
            </ul>
))}
    </div>
  )
}
