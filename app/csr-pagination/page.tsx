"use client"

import { useEffect, useState } from "react"

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
        };
        getData();
    }, []);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-3">
            <div className='font-bold text-xl p-3'>Phân trang với CSR</div>
            {currentPosts.map((item: any) => (
                <ul key={item.id}>
                    <li className="font-bold">{item.title}</li>
                    <li>{item.body.slice(0, 100)}{item.body.length > 100 ? '...' : ''}</li>
                </ul>
            ))}
            <div className="flex justify-between items-center p-3">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1} 
                    className="p-2 bg-gray-300 rounded"
                >
                    Previous
                </button>
                <span className="text-lg">
                    trang {currentPage} trên {totalPages}
                </span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages} 
                    className="p-2 bg-gray-300 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
