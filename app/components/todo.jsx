"use client"

import { useEffect, useState } from "react"

export default function Todo() {
    const [todo, setTodo] = useState({})

    const fetchdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await response.json()
        setTodo(result)
    }

    useEffect(()=>{
        fetchdata()    
    }, [])

    return (
        <div>
            <h1>{todo.title ? todo.title : "loading..."}</h1>
        </div>
    )
}