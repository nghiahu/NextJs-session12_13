async function getPost(id:any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}
export default async function page(props:any) {
    const {params} = props
    const post = await getPost(params.id)
  return (
    <div>
        <div>Chi tiết Bài viết</div>
        <div className="p-2">
            <div className="font-bold">{post.title}</div>
            <div>{post.body}</div>
        </div>
    </div>
  )
}
