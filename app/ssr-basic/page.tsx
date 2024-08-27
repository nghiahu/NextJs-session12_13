async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
export default async function page() {
  const post = await getPost();
  return (
    <div>Danh sách Bài viết
      
      {post.map((item: any) => (
    <ul key={item.id} className="p-3">
        <li className="font-bold">{item.title}</li>
        <li>{item.body.slice(0, 100)}{item.body.length > 100 ? '...' : ''}</li>
        <li>------------------------------------------------------------</li>
    </ul>
))}
    </div>
  )
}
