async function getUser() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/nonexistent-url");

        if (!res.ok) {
            throw new Error("Đường dẫn lỗi");
        }
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log(error);
        return "đường dẫn sai";
    }
}

export default async function Page() {
    const data = await getUser();
    return (
        <div>Xử lý lỗi với SSR: {JSON.stringify(data)}</div>
    );
}
