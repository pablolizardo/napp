'use client'

import { useEffect, useState } from "react";

// This is an client Component
export default function Page() {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const response = await res.json();
            setData(response)
        }
        fetchData()
    })
    return <div>{data ? JSON.stringify(data) : "loading"}</div>;
}
